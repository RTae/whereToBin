import React from "react";
import Lottie from "react-lottie";
import * as catAgentData from "./9642-loading-for-kiosk.json";

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: catAgentData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = ({ h, w }) => {
  return (
    <div className="modal fixed bg-black opacity-80 top-0 bottom-0 left-0 right-0 z-999 flex justify-center items-center ">
      <Lottie options={loadingOptions} height={h} width={w} />
    </div>
  );
};

export default Loading;
