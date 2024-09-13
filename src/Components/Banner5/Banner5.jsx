import React from "react";
import bgImage from "../../assets/contact/Image4.png";

const Banner5 = () => {
  return (
    <div
      className="bg-cover bg-center h-screen px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full">
          <div className="text-left">
            <h1 className="text-white text-4xl lg:text-[140px] font-rufina font-bold lg:leading-[150px]">Get in Touch</h1>
            <h2 className="text-white lg:text-[28px] font-medium font-rufina leading-[48px] mt-2">The freshest ingredients for you every day</h2>
          </div>
        </div>

        <div className="absolute right-2 bottom-10 lg:right-36 mb-20">
          <div className="flex items-center justify-between">
            <div className="text-white font-rufina text-[28px]">Open Time</div>
            <div className="text-white font-lato text-[20px]">Sunday - Friday</div>
          </div>

          <div className="h-1 w-full border-dotted border-t-2 border-white my-5"></div>

          <div className="flex space-x-32 text-white font-lato text-sm">
            <div><h1>Brunch</h1> <h1>11:00–12:00</h1></div>
            <div><h1>Lunch</h1> <h1>13:00–17:00</h1></div>
            <div><h1>Dinner</h1> <h1>18:00–20:00</h1></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner5;
