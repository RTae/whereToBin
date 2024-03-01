import React from "react";

function Modal({ result, onClose }) {
  return (
    <div className="modal fixed top-0 bottom-0 left-0 right-0 z-999 flex justify-center items-center ">
      <div
        className="modal-bg bg-black bg-opacity-75 top-0 absolute bottom-0 left-0 right-0"
        onClick={onClose}
      />
      <div className="modal-content relative bg-white lg:max-w-screen-md md:max-w-lg sm:max-w-lg rounded p-4">
        <svg
          onClick={onClose}
          className="w-6 h-6 absolute right-0 top-0 transform hover:scale-150 hover:rotate-45 transition-transform cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <img
          src={result}
          alt="resultimg"
          className="block lg:max-w-lg md:max-w-md ml-auto mr-auto mt-4"
        />
      </div>
    </div>
  );
}

export default Modal;
