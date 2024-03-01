import React, { useState } from "react";
import Home from "../components/pages/Home";
import imageCompression from "browser-image-compression";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function UploadAxios() {
  const axios = require("axios").default;
  const [done, setDone] = useState(true);

  const URL = process.env.REACT_APP_API_URL;

  const options = {
    method: "POST",
    url: `${URL}/detect?data=false`,
    headers: {
      "content-type": "multipart/form-data",
    },
    config: { responseType: "blob" },
    responseType: "blob",
  };

  async function onChange(e) {
    e.preventDefault();
    if (e.target.files[0]) {
      setDone(false);
      const imageFile = e.target.files[0];
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(imageFile, options);
        e.target.value = "";
        await Upload(compressedFile); // write your own logic
      } catch (error) {
        console.log(error);
      }
    } else return;
  }

  async function Upload(file) {
    const formData = new FormData();

    formData.append("file", file);
    try {
      const res = await axios.post(options.url, formData, options.config, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const result = window.URL.createObjectURL(res.data);
      setDone(true);
      MySwal.fire({
        title: "Your Result!",
        imageUrl: result,
        imageAlt: "result image",
        confirmButtonColor: "#41B87F",
        confirmButtonText: "Continue!",
      });
    } catch (err) {
      console.error(err);
    }
  }

  return <Home Upload={Upload} onChange={onChange} Done={done} />;
}

export default UploadAxios;
