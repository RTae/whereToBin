import os
import cv2

main_dir = "../dataset"
c = 2776

for img in [f for f in os.listdir(main_dir) if not f.endswith('txt')]:
    file_name = img.split(".")[0]
    for text in [t for t in os.listdir(main_dir) if t.endswith('txt')]:
        if file_name == text.split(".")[0]:
            path_file_name = f'{main_dir}/{img}'

            print(path_file_name)

            image = cv2.imread(path_file_name)
            cv2.imwrite(f'../dataset2/{c}.jpg', image, [int(cv2.IMWRITE_JPEG_QUALITY), 100])
            os.rename(f'{main_dir}/{text}',f'../dataset2/{c}.txt')

            c+=1
            
print(c)