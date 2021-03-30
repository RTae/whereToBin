import React from "react";

function BinCard({ title, subtitle, imgUrl, detail, text }) {
  return (
    <div className="flex flex-row items-center justify-between col-span-4 sm:px-8 sm:py-12 px-4 py-6 space-y-4 bg-gray-100 sm:rounded-xl hover:shadow-md">
      <div className="m-auto">
        <img className="max-h-72" src={imgUrl} alt="green-bin" />
      </div>
      <div className="flex flex-col items-center justify-center m-auto">
        <h4 className={`text-xl lg:text-3xl ${text} font-kanit font-bold`}>
          {title}
        </h4>
        <p className="text-gray-500 font-kanit ">({subtitle} )</p>
        <br />
        <p className="text-base text-center text-gray-500 font-kanit">
          {detail}
        </p>
      </div>
    </div>
  );
}

export default BinCard;
