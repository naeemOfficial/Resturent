import React from "react";
import img1 from "../../assets/Image1.png";
import img2 from "../../assets/Image2.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-[200px] px-4">
      <div className="lg:flex">
        <div className="flex flex-col items-start">
          <div data-aos="fade-right">
            <img src={img1} alt="" className="lg:w-[792px] lg:h-[560px]" />
          </div>
          <h2
            className="text-5xl lg:text-[68px] lg:w-[493px] text-white font-bold lg:leading-[84px] mt-20 font-rufina"
            data-aos="fade-up"
          >
            Start to plan your diet today
          </h2>
          <p
            className="lg:w-[465px] lg:text-[20px] font-lato text-white mt-10"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>
        </div>

        <div className="flex flex-col ml-auto lg:mt-0 mt-9">
          <p
            className="lg:w-[465px] lg:text-[20px] font-lato text-white mb-20"
            data-aos="fade-down"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>
          <div data-aos="fade-left">
            <img
              src={img2}
              alt="Right Image"
              className="lg:w-[508px] lg:h-[710px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
