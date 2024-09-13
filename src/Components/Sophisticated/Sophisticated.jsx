import React from "react";
import img1 from "../../assets/about/rosemary1.png";
import img2 from "../../assets/about/rosemary.png";
import img3 from "../../assets/about/Image9.png";
import img4 from "../../assets/about/Image6.png";
import img5 from "../../assets/about/Image8.png";

const Sophisticated = () => {
  return (
    <div className="relative py-20 px-4">
      <img
        src={img1}
        alt=""
        className="absolute top-0 right-0 w-1/4 opacity-50"
      />
      <img
        src={img2}
        alt=""
        className="absolute bottom-0 left-0 w-1/4 opacity-50"
      />

      <div className="container mx-auto">
        <div className="text-center mb-10 lg:mb-40">
          <h2 className="text-4xl lg:text-[108px] font-bold font-rufina pt-56">
            Sophisticated Process
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[102px] lg:mb-40">
          <div className="lg:w-1/2">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 mt-12">
            <h1 className="font-rufina text-5xl lg:text-[88px] font-bold">01.Slice</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla
              sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-52 ">
          <div className="lg:w-1/2 flex flex-col items-start pt-48 pb-28 lg:pb-[400px]">
            <h1 className="font-rufina text-5xl lg:text-[70px] font-bold">03.Bake</h1>
            <p className="text-lg mb-4 w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={img4} alt="Left Image" className="w-full h-auto" />
          </div>

          <div className="lg:w-1/2 flex flex-col pb-28 lg:pb-[600px]">
            <img src={img5} alt="Right Image" className="w-full h-auto mb-4" />
            <h1 className="font-rufina text-[70px] font-bold">02.Pickled</h1>
            <p className="flex text-lg w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sophisticated;
