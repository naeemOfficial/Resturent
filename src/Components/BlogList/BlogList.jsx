import React from "react";
import img1 from "../../assets/FeatureImage.png";
import img2 from "../../assets/FeatureImage1.png";
import img3 from "../../assets/Avatar.png";
import img4 from "../../assets/Avatar1.png";
import img5 from "../../assets/blog/img3.jpeg";
import img6 from "../../assets/blog/img4.jpeg";
import img7 from "../../assets/blog/img5.jpeg";
import img8 from "../../assets/blog/Avatar.png";
import img9 from "../../assets/blog/Avatar1.png";
import img10 from "../../assets/blog/Avatar2.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div className="container mx-auto flex flex-col my-56 lg:my-12 px-4 ">
      <div className="lg:w-full flex flex-col lg:flex-row gap-[80px] items-center my-20">
        <div className="relative mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]">
          <img
            src={img1}
            alt="Left Card Image"
            className="mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]"
          />
          <button className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-lime-700 text-white px-3 py-1 lg:px-6 lg:py-2 text-[10px] lg:text-sm font-semibold">
            Fashion
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 lg:gap-3.5 my-3">
            <img
              className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              src={img3}
              alt="Profile"
            />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              Julie Christie
            </div>
            <div className="w-1 h-1 bg-lime-700 rounded-full" />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              October 17, 2021
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

          <Link to="/singlepost">
            <div className="flex items-center gap-2.5 mt-4 px-2">
              <div className="text-black text-lg lg:text-xl font-normal font-lato leading-[1.5] tracking-wide">
                Read More
              </div>
              <FaArrowRightLong className="mt-[4px]" />
            </div>
          </Link>
        </div>
      </div>

      {/* Second Blog Post */}
      <div className="lg:w-full flex flex-col lg:flex-row gap-[80px] items-center mb-20">
        <div className="relative mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]">
          <img
            src={img2}
            alt="Left Card Image"
            className="mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]"
          />
          <button className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-lime-700 text-white px-3 py-1 lg:px-6 lg:py-2 text-[10px] lg:text-sm font-semibold">
            Fashion
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 lg:gap-3.5 my-3">
            <img
              className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              src={img4}
              alt="Profile"
            />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              Julie Christie
            </div>
            <div className="w-1 h-1 bg-lime-700 rounded-full" />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              October 17, 2021
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
              Asparagus Spring Salad with Rocket, Goat's Cheese
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

          <Link to="/singlepost">
            <div className="flex items-center gap-2.5 mt-4 px-2">
              <div className="text-black text-lg lg:text-xl font-normal font-lato leading-[1.5] tracking-wide">
                Read More
              </div>
              <FaArrowRightLong className="mt-[4px]" />
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:w-full flex flex-col lg:flex-row gap-[80px] items-center mb-20">
        <div className="relative mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]">
          <img
            src={img5}
            alt="Left Card Image"
            className="mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]"
          />
          <button className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-lime-700 text-white px-3 py-1 lg:px-6 lg:py-2 text-[10px] lg:text-sm font-semibold">
            Fashion
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 lg:gap-3.5 my-3">
            <img
              className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              src={img8}
              alt="Profile"
            />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              Julie Christie
            </div>
            <div className="w-1 h-1 bg-lime-700 rounded-full" />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              October 17, 2021
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
              7 Reasons to Start Your Day With Lemon Water
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

          <Link to="/singlepost">
            <div className="flex items-center gap-2.5 mt-4 px-2">
              <div className="text-black text-lg lg:text-xl font-normal font-lato leading-[1.5] tracking-wide">
                Read More
              </div>
              <FaArrowRightLong className="mt-[4px]" />
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:w-full flex flex-col lg:flex-row gap-[80px] items-center mb-20">
        <div className="relative mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]">
          <img
            src={img6}
            alt="Left Card Image"
            className="mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]"
          />
          <button className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-lime-700 text-white px-3 py-1 lg:px-6 lg:py-2 text-[10px] lg:text-sm font-semibold">
            Fashion
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 lg:gap-3.5 my-3">
            <img
              className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              src={img9}
              alt="Profile"
            />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              Julie Christie
            </div>
            <div className="w-1 h-1 bg-lime-700 rounded-full" />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              October 17, 2021
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
              Three Ideas for Cooking Goat Meat at Home
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

          <Link to="/singlepost">
            <div className="flex items-center gap-2.5 mt-4 px-2">
              <div className="text-black text-lg lg:text-xl font-normal font-lato leading-[1.5] tracking-wide">
                Read More
              </div>
              <FaArrowRightLong className="mt-[4px]" />
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:w-full flex flex-col lg:flex-row gap-[80px] items-center mb-20">
        <div className="relative mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]">
          <img
            src={img7}
            alt="Left Card Image"
            className="mb-4 w-full h-auto lg:w-[792px] lg:h-[792px]"
          />
          <button className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-lime-700 text-white px-3 py-1 lg:px-6 lg:py-2 text-[10px] lg:text-sm font-semibold">
            Fashion
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 lg:gap-3.5 my-3">
            <img
              className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              src={img10}
              alt="Profile"
            />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              Julie Christie
            </div>
            <div className="w-1 h-1 bg-lime-700 rounded-full" />
            <div className="text-lime-700 text-[11px] lg:text-base font-normal font-['Lato'] tracking-tight">
              October 17, 2021
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
              12 Sparkling Wines We're Loving This Summer
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

          <Link to="/singlepost">
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
  );
};

export default BlogList;
