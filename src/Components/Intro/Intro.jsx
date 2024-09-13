import React from "react";
import LeftImage from "../../assets/about/Image12.png";
import RightImage from "../../assets/about/Image10.png";

const Intro = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between pb-32 px-4 gap-20">
      <div className="flex flex-col space-y-4">
        <div className="text-center ">
          <h2 className="text-2xl lg:text-[68px] font-rufina font-bold">
            Restuarant Manager
          </h2>
          <p className="text-base mb-4">Carson Hugn</p>
        </div>
        <div className="lg:w-[726px] lg:h-[861px]">
          <img
            src={LeftImage}
            alt="Left Side"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg text-[#4D4D4D] text-right lg:pt-72">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in
          pellentesque or nare <br /> nunc nisl. Augue habitant accumsan, ut <br /> parturient
          orci ac etiam congue mi.
        </p>
      </div>

      <div className="flex flex-col space-y-4 lg:pt-28">
        <p className="text-left text-lg text-[#4D4D4D] lg:mt-10">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in
          pellentesque ornare <br /> nunc nisl.
        </p>
        <div className="text-center ">
          <h2 className="text-5xl lg:text-[68px] font-rufina font-bold leading-[84px] mt-10 lg:mt-60">
            Executive Chef
          </h2>
          <p className="text-base mb-4">Jane Cooper</p>
        </div>
        <div className="lg:w-[726px] lg:h-[861px]">
          <img
            src={RightImage}
            alt="Right Side"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
