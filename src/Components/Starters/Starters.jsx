import React from "react";
import img1 from "../../assets/menu/Blueberry.png";
import img2 from "../../assets/menu/Image2.png";

const Starters = () => {
  return (
    <div className="relative pb-44 px-4">
      <div className="absolute lg:-top-[17px] -right-[45px]">
        <img
          src={img1}
          alt="Your Alt Text"
          className="object-contain w-full h-[138px] md:w-[520px] md:h-[438px] rounded-lg"
        />
      </div>

      <div className="relative">
        <div className="flex flex-col md:flex-row justify-center relative">
          <div className=" text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-rufina mb-4 mt-28 md:mt-[176px] lg:leading-[120px]"
              data-aos="fade-up"
            >
              Starters
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
            <div >
              <img
                src={img2}
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
                  Grilled Okra and <br /> Tomatoes
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
                  Cucumber Salad
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
                  Basil Pancakes
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

export default Starters;
