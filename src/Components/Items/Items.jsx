import React from "react";
import img1 from "../../assets/FeatureImage.png";
import img2 from "../../assets/FeatureImage1.png";
import img3 from "../../assets/Avatar.png";
import img4 from "../../assets/Avatar1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex lg:justify-between items-center py-56 lg:py-28 px-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full gap-5">
        <div className="lg:w-[50%]">
          <img
            src={img1}
            alt="Left Card Image"
            className="mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]"
          />

          <div className="lg:p-4">
            <div className="flex items-center gap-2 lg:gap-3.5 my-3">
              <img className="w-10 h-10 lg:w-[60px] lg:h-[60px]" src={img3} />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                Julie Christie
              </div>
              <div className="w-1 h-1 bg-lime-700 rounded-full" />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                October 17,2021
              </div>
              <div className="w-1 h-1 bg-lime-700 rounded-full" />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                3:33 pm
              </div>
              <div className="w-1 h-1 bg-lime-700 rounded-full" />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                2 comments
              </div>
            </div>

            <div className="p-2">
              <div className="text-black text-2xl lg:text-4xl font-bold font-['Rufina'] leading-[40px]">
                Fruit and vegetables and protection against diseases
              </div>
              <div className="lg:flex space-x-1 my-5 hidden">
                {Array.from(
                  { length: window.innerWidth >= 768 ? 85 : 40 },
                  (_, index) => (
                    <div
                      key={index}
                      className="w-1 h-1 bg-black rounded-full"
                    ></div>
                  )
                )}
              </div>

              <div className="text-neutral-600 text-[18px] lg:text-base font-Lato leading-[1.5] tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <div>
              <Link to="/singlePost">
                <div className="flex items-center gap-2.5 mt-4 px-[3px]">
                  <div className="text-black text-lg lg:text-xl font-normal font-lato leading-[1.5] tracking-wide">
                    Read More
                  </div>
                  <FaArrowRightLong className="mt-[4px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <img
            src={img2}
            alt="Left Card Image"
            className="mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]"
          />

          <div className="p-4">
            <div className="flex items-center gap-2 lg:gap-3.5 my-3">
              <img className="w-10 h-10 lg:w-[60px] lg:h-[60px]" src={img4} />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                Julie Christie
              </div>
              <div className="w-1 h-1 bg-lime-700 rounded-full" />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                October 17,2021
              </div>
              <div className="w-1 h-1 bg-lime-700 rounded-full" />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                3:33 pm
              </div>
              <div className="w-1 h-1 bg-lime-700 rounded-full" />
              <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
                2 comments
              </div>
            </div>

            <div className="p-2">
              <div className="text-black text-2xl lg:text-4xl font-bold font-['Rufina'] leading-[40px]">
                Fruit and vegetables and protection against diseases
              </div>
              <div className="lg:flex space-x-1 my-5 hidden">
                {Array.from({ length: 85 }, (_, index) => (
                  <div
                    key={index}
                    className="w-1 h-1 bg-black rounded-full"
                  ></div>
                ))}
              </div>
              <div className="text-neutral-600 text-[18px] lg:text-base font-Lato leading-[1.5] tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <div>
              <Link to="/singlePost">
                <div className="flex items-center gap-2.5 mt-4 px-2">
                  <div className="text-black text-lg lg:text-xl font-normal font-lato leading-[1.5] tracking-wide">
                    Read More
                  </div>
                  <FaArrowRightLong className="mt-[4px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
