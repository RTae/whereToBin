import React from "react";
import Lottie from "react-lottie";
import * as skeletonData from "../static/animation/474-skeleton-frame-loading.json";

const blogOptions = {
  loop: true,
  autoplay: true,
  animationData: skeletonData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loader({ w, h }) {
  return <Lottie options={blogOptions} height={h} width={w} />;
}

export default Loader;
