import React from "react";
import img1 from "../../assets/Image3.png";

const OurMenu = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <img
          src={img1}
          alt="Your Alt Text"
          className="object-cover w-full h-auto md:w-[979.488px] md:h-[1046.207px] rounded-lg"
        />
      </div>

      <div className="relative container mx-auto p-8 mb-24">
        <div className="flex flex-col md:flex-row relative">
          <div className="md:w-3/4 md:pr-8 mb-8 md:mb-0">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-rufina mb-4 mt-8 md:mt-[176px] leading-[120px]"
              data-aos="fade-up"
            >
              Our Menu
            </h1>
            <p
              className="text-[#4D4D4D] font-lato text-lg md:text-2xl lg:text-3xl leading-[33px] md:w-[532px]"
              data-aos="fade-up"
            >
              This is a section of your menu. Give your section a brief
              description
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-40 container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-[60px]">
            <div className="w-full md:w-[792px] md:h-[326px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-right text-black text-4xl font-bold font-['Rufina'] leading-[64px]">
                  $20
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: 89 }, (_, index) => (
                    <div
                      key={index}
                      className="w-1 h-1 bg-black rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="self-stretch text-black text-4xl lg:text-[58px] font-bold font-['Rufina'] lg:leading-[84px]">
                Deep Sea Snow White Cod Fillet
              </div>
              <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="w-full md:w-[792px] md:h-[326px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-right text-black text-4xl font-bold font-['Rufina'] leading-[64px]">
                  $22
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: 89 }, (_, index) => (
                    <div
                      key={index}
                      className="w-1 h-1 bg-black rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="self-stretch text-black text-4xl lg:text-[58px] font-bold font-['Rufina'] lg:leading-[84px]">
                Steak With Rosemary Butter
              </div>
              <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-[60px] mt-8 md:mt-24">
           
            <div className="w-full md:w-[792px] md:h-[326px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-right text-black text-4xl font-bold font-['Rufina'] leading-[64px]">
                  $18
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: 89 }, (_, index) => (
                    <div
                      key={index}
                      className="w-1 h-1 bg-black rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="self-stretch text-black text-4xl lg:text-[58px] font-bold font-['Rufina'] lg:leading-[84px]">
                Cucumber Salad
              </div>
              <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            
            <div className="w-full md:w-[792px] md:h-[326px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-right text-black text-4xl font-bold font-['Rufina'] leading-[64px]">
                  $90
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: 89 }, (_, index) => (
                    <div
                      key={index}
                      className="w-1 h-1 bg-black rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="self-stretch text-black text-4xl lg:text-[58px] font-bold font-['Rufina'] lg:leading-[84px]">
                Natural Wine Pairing
              </div>
              <div className="self-stretch text-neutral-600 text-lg lg:text-xl font-normal font-['Lato'] lg:leading-[33.60px] tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
