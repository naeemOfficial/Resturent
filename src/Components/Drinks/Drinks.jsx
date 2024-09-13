import React from "react";
import img1 from "../../assets/menu/Image3.png";
import img2 from "../../assets/menu/Avocado.png";

const Drinks = () => {
  return (
    <div className="relative pb-44 px-4">
      <div className="relative z-50">
        <div className="flex flex-col md:flex-row relative justify-center items-center">
          <div className="absolute items-center justify-center">
            <img
              src={img2}
              alt=""
              className="w-full h-[200px] md:w-[348px] md:h-[415px] lg:mt-14"
            />
          </div>
          <div className=" text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-rufina mt-8 md:mt-[176px] lg:leading-[120px]"
              data-aos="fade-up"
            >
              Pastries & Drinks
            </h1>

            <p
              className="text-[#4D4D4D] font-lato text-xs md:text-lg lg:leading-[33px] mb-20"
              data-aos="fade-up"
            >
              This is a section of your menu. Give your section a brief
              description
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-40 container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-between md:gap-[100px]">
            <div>
              <img
                src={img1}
                alt=""
                className="w-full h-full  md:w-[792px] md:h-[989px]"
              />
            </div>
            <div>
              <div className="w-full md:w-[692px] md:h-[326px] flex-col justify-start items-start gap-6 ">
                <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch text-right text-black text-4xl font-bold font-['Rufina'] leading-[64px]">
                    $20
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: 79 }, (_, index) => (
                      <div
                        key={index}
                        className="w-1 h-1 bg-black rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="self-stretch text-black text-4xl lg:text-[58px] font-bold font-['Rufina'] lg:leading-[84px] mt-8">
                  Wine Pairing
                </div>
                <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className="w-full md:w-[692px] md:h-[326px] flex-col justify-start items-start gap-6 ">
                <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch text-right text-black text-4xl font-bold font-['Rufina'] leading-[64px]">
                    $22
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: 79 }, (_, index) => (
                      <div
                        key={index}
                        className="w-1 h-1 bg-black rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="self-stretch text-black text-4xl lg:text-[58px] font-bold font-['Rufina'] lg:leading-[84px] mt-8">
                  Natural Wine Pairing
                </div>
                <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className="w-full md:w-[692px] md:h-[326px] flex-col justify-start items-start gap-6 ">
                <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch text-right text-black text-4xl font-bold font-['Rufina'] leading-[64px]">
                    $22
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: 79 }, (_, index) => (
                      <div
                        key={index}
                        className="w-1 h-1 bg-black rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="self-stretch text-black text-4xl lg:text-[58px] font-bold font-['Rufina'] lg:leading-[84px] mt-8">
                  Whisky Flyer
                </div>
                <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
