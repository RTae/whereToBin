import React from "react";
import BinCard from "../BinCard";

function General() {
  return (
    <section id="tips" className="mt-10 py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center font-kanit">
          Type of garbage waste
        </h2>
        <p className="mt-2 text-lg font-kanit text-center text-gray-600">
          Meaning of each type.
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-8 sm:px-8 px-8 xl:px-0">
          {/* Green Bin */}
          <BinCard
            imgUrl="https://res.cloudinary.com/khaokruacooking/image/upload/v1614254109/Bin/green-bin_wbdccr.png"
            title="ถังสีเขียว"
            subtitle="ขยะทั่วไป ไม่คุ้มค่าต่อการรีไซเคิล"
            detail="นำไปทำปุ๋ยหรือน้ำชีวภาพ"
            text="text-greenBin"
          />

          {/* Blue Bin */}
          <BinCard
            imgUrl="https://res.cloudinary.com/khaokruacooking/image/upload/v1614254109/Bin/blue-bin_kqfqsb.png"
            title="ถังสีน้ำเงิน"
            subtitle="ขยะทั่วไป ไม่คุ้มค่าต่อการรีไซเคิล"
            detail="ทำเชื่อเพลิงหรือสิ่งประดิษฐ์ต่างๆ"
            text="text-blueBin"
          />

        </div>
      </div>
    </section>
  );
}

export default General;
