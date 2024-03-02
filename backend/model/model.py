import cv2
import numpy as np
import tensorflow as tf
from model.core.utils import draw_bbox
from tensorflow.python.saved_model import tag_constants

class Model():
    def __init__(self):
        physical_devices = tf.config.experimental.list_physical_devices('GPU')
        if len(physical_devices) > 0:
            tf.config.experimental.set_memory_growth(physical_devices[0], True)

        self.input_size = 416
        self.iou_threshold = 0.45,
        self.score_threshold = 0.25

        self.saved_model_loaded = ""
        self.__load_model()

        
    def __preprocess(self, image_byte):
        nparr = np.fromstring(image_byte, np.uint8)
        original_image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        original_image = cv2.cvtColor(original_image, cv2.COLOR_BGR2RGB)
        image_data = cv2.resize(original_image, (self.input_size, self.input_size))
        image_data = image_data / 255.
        image_data = np.asarray([image_data]).astype(np.float32)

        return image_data, original_image
    
    def __load_model(self):
        self.saved_model_loaded = tf.saved_model.load("./model/weight", tags=[tag_constants.SERVING])
    
    def __predict(self, image_data):
        infer = self.saved_model_loaded.signatures['serving_default']

        batch_data = tf.constant(image_data)
        pred_bbox = infer(batch_data)

        for key, value in pred_bbox.items():
            boxes = value[:, :, 0:4]
            pred_conf = value[:, :, 4:]

        boxes, scores, classes, valid_detections = tf.image.combined_non_max_suppression(
            boxes=tf.reshape(boxes, (tf.shape(boxes)[0], -1, 1, 4)),
            scores=tf.reshape(
                pred_conf, (tf.shape(pred_conf)[0], -1, tf.shape(pred_conf)[-1])),
            max_output_size_per_class=50,
            max_total_size=50,
            iou_threshold=self.iou_threshold[0],
            score_threshold=self.score_threshold
        )

        pred_bbox = [boxes.numpy(), scores.numpy(), classes.numpy(), valid_detections.numpy()]

        return pred_bbox

    def __draw(self, original_image, pred_bbox):
        image = draw_bbox(original_image, pred_bbox)
        return image
    
    def detect(self, img_byte):
        img, original_image = self.__preprocess(img_byte)
        predict = self.__predict(img)
        image_draw = self.__draw(original_image, predict)
        image_draw = cv2.cvtColor(image_draw, cv2.COLOR_BGR2RGB)
        _, im_buf_arr = cv2.imencode(".jpg", image_draw)
        byte_im = im_buf_arr.tobytes()

        return byte_im

    def health(self):
        return "Healthy"