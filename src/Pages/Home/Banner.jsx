import React from "react";
import img1 from "../../assets/banner.jpeg";
import img2 from "../../assets/pic1.png";
import img3 from "../../assets/pic2.png";
import img4 from "../../assets/pic3.png";
import Section from "../../Components/Banner/Banner";
import "typeface-rufina";
import "typeface-lato";

const Banner = () => {
  return (
    <div className="bg-primary pt-[250px] pb-[200px] px-7">
      <div className="container mx-auto flex p-4 relative">
        <div className="absolute left-0 top-0 lg:w-[1057px] lg:ml-11">
          <h2
            className="text-5xl lg:text-[148px] font-rufina text-white font-bold mb-4 lg:leading-[152px]"
            data-aos="fade-up"
          >
            Healthy Eating is important part of lifestyle{" "}
          </h2>
          <p
            className="text-white font-lato lg:text-[24px] lg:mt-20 lg:w-[565px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>
          <div className=" relative mt-9 lg:mt-20 mr-8">
            <div className="left-[64px] top-0 absolute origin-top-left rotate-90 text-white text-3xl lg:text-5xl font-bold font-['Rufina'] leading-[64px]">
              Scroll
            </div>
            <div className=" left-[28px] top-[90px] lg:top-[148px] absolute origin-top-left rotate-90 text-lg ml-4 text-white">
              ------------------------------------------------------------------
            </div>
          </div>
        </div>

        <div className=" lg:w-[792px] lg:pt-[95px] ml-auto lg:mt-0 mt-80">
          <img src={img1} alt="Main" className="w-full h-auto mb-4 lg:mb-0" />

          <div className="flex  lg:-ml-[350px] -mt-44">
            <img
              src={img2}
              alt="Image 1"
              className="lg:w-[255px] w-[100px] h-full lg:h-auto mr-10"
              data-aos="fade-up"
              data-aos-duration="800"
            />
            <img
              src={img3}
              alt="Image 2"
              className="lg:w-[255px] w-[100px] h-full lg:h-auto mr-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <img
              src={img4}
              alt="Image 3"
              className="lg:w-[255px] w-[100px] h-full lg:h-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            />
          </div>
        </div>
      </div>
      <div className="pt-[100px]">
        <Section />
      </div>
    </div>
  );
};

export default Banner;
