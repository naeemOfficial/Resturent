import React from "react";
import bannerImage from "../../assets/banner2.jpeg";
import img3 from "../../assets/Avatar.png";

const Banner4 = () => {
  return (
    <div
      className="text-white p-4 h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${bannerImage})`,
        backgroundSize: "cover", // ensures the image covers the entire background area
        backgroundPosition: "center", // centers the image
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray",
      }}
    >
      <div className="container mx-auto py-28">
        <div className="px-4">
          <div className="flex flex-col font-rufina font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[88px] justify-center items-center text-start leading-tight md:leading-[105px]">
            Three Ideas for Cooking <br /> Goat Meat at Home
            <div className="flex items-center gap-2 lg:gap-3.5 my-3">
              <img
                className="w-10 h-10 lg:w-[80px] lg:h-[80px]"
                src={img3}
                alt="Profile"
              />
              <div className="text-white text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                Julie Christie
              </div>
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="text-white text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                October 17, 2021
              </div>
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="text-white text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                3:33 pm
              </div>
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="text-white text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                2 comments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
