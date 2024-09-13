import React from "react";
import img1 from "../../assets/Image4.png";
import img2 from "../../assets/Image5.png";
import img3 from "../../assets/Image6.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Menu = () => {
  return (
    <div className="container mx-auto my-36">
      <div className=" flex-col justify-center items-center gap-[18px] flex">
        <div className=" text-center text-black text-5xl lg:text-[108px] font-bold font-['Rufina'] lg:leading-[120px]">
          Calories Energy <br /> Balance
        </div>
        <div className="self-stretch text-center text-neutral-600 lg:text-2xl font-normal font-['Lato'] leading-[33.60px] tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
      </div>

      <div className="lg:flex lg:justify-between mt-40 gap-10 px-4">
        <div className="relative mb-4">
          <img
            src={img1}
            alt="Image 1"
            className="lg:w-[508px] lg:h-[711px] object-cover rounded-md"
          />
          <p className="absolute left-4 top-3 text-3xl font-bold font-rufina text-black text-center p-2">
            Starters
          </p>
          <p className="absolute right-4 top-3 text-3xl font-bold font-rufina text-black text-center p-2">
            <FaArrowRightLong />
          </p>
        </div>
        <div className="relative mb-4">
          <img
            src={img2}
            alt="Image 1"
            className="w-[508px] h-[711px] object-cover rounded-md"
          />
          <p className="absolute left-4 top-3 text-3xl font-bold font-rufina text-black text-center p-2">
            Starters
          </p>
          <p className="absolute right-4 top-3 text-3xl font-bold font-rufina text-black text-center p-2">
            <FaArrowRightLong />
          </p>
        </div>
        <div className="relative mb-4">
          <img
            src={img3}
            alt="Image 1"
            className="w-[508px] h-[711px] object-cover rounded-md"
          />
          <p className="absolute left-4 top-3 text-3xl font-bold font-rufina text-black text-center p-2">
            Starters
          </p>
          <p className="absolute right-4 top-3 text-3xl font-bold font-rufina text-black text-center p-2">
            <FaArrowRightLong />
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Menu;
