import React from "react";
import Lottie from "react-lottie";
import * as catAgentData from "../animation/6890-cat-agent-007.json";
import * as doneData from "../animation/676-done.json";
import * as skeletonData from "../animation/474-skeleton-frame-loading.json";

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: catAgentData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const doneOptions = {
  loop: true,
  autoplay: true,
  animationData: doneData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const blogOptions = {
  loop: true,
  autoplay: true,
  animationData: skeletonData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loading({ h, w }) {
  return <Lottie options={loadingOptions} height={h} width={w} />;
}

export default Loading;
