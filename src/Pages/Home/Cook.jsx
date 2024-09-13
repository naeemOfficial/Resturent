import React from "react";
import img1 from "../../assets/cook/Leaf.png";
import img2 from "../../assets/cook/image.png";
import img3 from "../../assets/cook/image1.png";
import img4 from "../../assets/cook/Leaf1.png";

const Cook = () => {
  return (
    <div className="bg-[#EBF0E4] pt-16 md:pt-32 pb-16 md:pb-20 lg:pb-32 relative">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        <div className="md:w-1/2 relative mt-40 lg:mt-0">
          <img
            src={img1}
            alt=""
            className="absolute w-2/3 md:w-2/3 lg:w-1/2 left-48 transform -translate-x-48 lg:-translate-x-56 -top-[140px] md:top-1/4 lg:-top-[370px]"
          />
          <img
            src={img2}
            alt="Center Top Image"
            className="w-full md:w-2/3 lg:w-full mx-auto md:absolute top- lg:-top-[270px]"
          />
          <img
            src={img3}
            alt="Top Image"
            className="w-1/2 md:w-1/3 lg:w-1/2 mx-auto absolute top-2 lg:-top-64 md:mt-5 lg:mt-0 left-2 transform translate-x-1"
          />
        </div>
        <div className=" md:w-1/2 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-rufina font-bold mb-4 md:mb-8 leading-tight">
              Excellent <br /> cook
            </h2>
            <p className="text-[#4D4D4D] font-lato text-base md:text-xl lg:text-2xl max-w-2xl mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </p>
          </div>

          <div className="bottom-image mt-8">
            <img
              src={img4}
              alt="Bottom Image"
              className="w-[300px] mx-auto md:w-2/3 lg:w-1/2  md:ml-48 mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;
