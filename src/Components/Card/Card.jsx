import React from "react";
import img1 from "../../assets/Icon_fish.svg";
import img2 from "../../assets/Icon_carrot.svg";
import img3 from "../../assets/Icon_lemon.svg";

const Card = () => {
  return (
    <div className="container mx-auto my-20 lg:my-0">
      <div className=" lg:flex lg:justify-between text-center items-center h-screen gap-[30px] ">
        <div className="lg:w-[508px] p-4 ">
          <div className="flex justify-center items-center mb-4">
            <img src={img1} alt="" className="h-[184px] w-[184px] p-5 rounded-full bg-[#EBF0E4]" />
          </div>
          <h1 className="font-rufina font-bold text-4xl my-[39px]">Premium Quality</h1>
          <p className="font-lato text-sm lg:text-xl text-[#4D4D4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
        </div>

        <div className="lg:w-[508px] p-4 ">
          <div className="flex justify-center items-center mb-4 ">
            <img src={img2} alt="" className="h-[184px] w-[184px] p-5 rounded-full bg-[#EBF0E4]" />
          </div>
          <h1 className="font-rufina font-bold text-4xl my-[39px]">Seasonal Vegetables</h1>
          <p className="font-lato text-sm lg:text-xl text-[#4D4D4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
        </div>

        <div className="lg:w-[508px] p-4 ">
          <div className="flex justify-center items-center mb-4">
            <img src={img3} alt="" className="h-[184px] w-[184px] p-5 rounded-full bg-[#EBF0E4]" />
          </div>
          <h1 className="font-rufina font-bold text-4xl my-[39px]">Fresh Fruit</h1>
          <p className="font-lato text-sm lg:text-xl text-[#4D4D4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
