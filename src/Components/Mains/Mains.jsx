import React from "react";
import img1 from "../../assets/menu/Image4.png";

const Mains = () => {
  return (
    <div className="relative pb-44 px-4">
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-center relative">
          <div className=" text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-rufina mb-4 mt-8 md:mt-[100px] lg:leading-[120px]"
              data-aos="fade-up"
            >
              Mains
            </h1>
            <p
              className="text-[#4D4D4D] font-lato text-xs md:text-lg leading-[33px] mt-7 "
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
                  Deep Sea Snow White <br /> Cod Fillet
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
                  Steak With Rosemary <br /> Butter
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
                  Steaks with Grilled <br /> Kimchi
                </div>
                <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="w-full h-full  md:w-[792px] md:h-[989px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mains;
