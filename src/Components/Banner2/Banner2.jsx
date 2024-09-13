import React from "react";
import backgroundImage from "../../assets/menu/Image1.png";

const Banner2 = () => {
  return (
    <div
      className="text-white p-4 bg-cover lg:h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto py-20 md:py-28">
        <div className="px-4 md:px-12 pt-20 md:pt-28">
          <div className="font-rufina font-bold text-5xl md:text-[100px] lg:text-[148px] leading-tight md:leading-[100px] lg:leading-[152px]">
            View Our <br /> New Menu
          </div>
          <div className="pt-6 md:pt-10 lg:pt-[50px] font-rufina font-bold text-lg md:text-2xl lg:text-[32px]">
            The freshest ingredients for you every day
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
