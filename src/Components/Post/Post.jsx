import React from "react";
import Content from "../Content/Content";
import img1 from "../../assets/blog/img1.jpeg";
import img2 from "../../assets/blog/img2.jpeg";
import img3 from "../../assets/blog/img3.jpeg";
import img4 from "../../assets/blog/img4.jpeg";
import img5 from "../../assets/blog/img5.jpeg";
import { FiSearch } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Form from "../Form/Form";

const Post = () => {
  return (
    <div className="px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-20">
        <div className="flex-1 bg-white">
          <Content />
        </div>

        <div className="w-full lg:w-1/4 p-6">
          <div className="mb-[170px]">
            <div className="flex items-center border-b-2 border-black pb-2">
              <input
                type="text"
                placeholder="Search....."
                className="flex-1 outline-none placeholder-black"
              />
              <FiSearch className="text-black text-xl" />
            </div>
          </div>

          <div className="mb-[170px]">
            <h3 className="text-[26px] font-bold font-rufina mb-4">
              Category{" "}
              <span className="border-b border-dotted border-gray-400"></span>
            </h3>
            <div className="border-b-[3px] border-dotted border-black mb-4"></div>
            <ul className="space-y-3 font-lato">
              <li className="flex justify-between">
                <span>Fashion</span>
                <span>16</span>
              </li>
              <li className="flex justify-between">
                <span>Food</span>
                <span>20</span>
              </li>
              <li className="flex justify-between">
                <span>Music</span>
                <span>12</span>
              </li>
              <li className="flex justify-between">
                <span>Travel</span>
                <span>36</span>
              </li>
            </ul>
          </div>

          <div className="mb-[170px]">
            <h3 className="text-[26px] font-bold font-rufina mb-4">
              Recent Comments{" "}
              <span className="border-b border-dotted border-gray-400"></span>
            </h3>
            <div className="border-b-[3px] border-dotted border-black mb-8"></div>
            <div className="space-y-7 tracking-wide">
              <h2 className=" font-lato text-base">
                <span className="text-[#B0B0B0]">John Mccain</span> Vegan baked
                oatmeal with fresh berries
              </h2>
              <h2 className=" font-lato text-base">
                <span className="text-[#B0B0B0]">Ana </span> 50 Foods That Are
                Super Healthy
              </h2>
              <h2 className=" font-lato text-base">
                <span className="text-[#B0B0B0]">Camilla</span> How Many Carbs
                Should You Eat for Weight Loss?
              </h2>
              <h2 className=" font-lato text-base">
                <span className="text-[#B0B0B0]">Dailey</span> 22 Foods That Can
                Give You More Energy
              </h2>
            </div>
          </div>

          <div className="mb-[170px]">
            <h3 className="text-[26px] font-bold font-rufina mb-4">
              Archives{" "}
              <span className="border-b border-dotted border-gray-400"></span>
            </h3>
            <div className="border-b-[3px] border-dotted border-black mb-8"></div>
            <ul className="space-y-4 text-lg  font-lato font-medium text-[24px]">
              <li className="flex justify-between">
                <span>October 2021</span>
                <span>12</span>
              </li>
              <li className="flex justify-between">
                <span>September 2021</span>
                <span>8</span>
              </li>
              <li className="flex justify-between">
                <span>August 2021</span>
                <span>5</span>
              </li>
            </ul>
          </div>

          <div className="mb-[170px]">
            <h3 className="text-[26px] font-bold font-rufina mb-4">
              Recent Posts{" "}
              <span className="border-b border-dotted border-gray-400"></span>
            </h3>
            <div className="border-b-[3px] border-dotted border-black mb-8"></div>
            <div className="flex items-center mb-6">
              <img
                src={img1}
                alt="Recent Post Image"
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-rufina">
                  Vegan baked oatmeal with fresh berries
                </p>
                <p className="text-gray-500">
                  Julie Christie . October 17,2021
                </p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <img
                src={img2}
                alt="Recent Post Image"
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-rufina">
                  Vegan baked oatmeal with fresh berries
                </p>
                <p className="text-gray-500">
                  Julie Christie . October 17,2021
                </p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <img
                src={img3}
                alt="Recent Post Image"
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-rufina">
                  Vegan baked oatmeal with fresh berries
                </p>
                <p className="text-gray-500">
                  Julie Christie . October 17,2021
                </p>
              </div>
            </div>
            <div className="flex items-center ">
              <img
                src={img4}
                alt="Recent Post Image"
                className="w-16 h-16 object-fill mr-4"
              />
              <div>
                <p className="font-rufina">
                  Vegan baked oatmeal with fresh berries
                </p>
                <p className="text-gray-500">
                  Julie Christie . October 17,2021
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[26px] font-rufina font-bold mb-4">Tags</h3>
            <div className="border-b-[3px] border-dotted border-black mb-8"></div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 border border-black rounded-md">
                Design
              </button>
              <button className="px-4 py-2 border border-black rounded-md">
                Photography
              </button>
              <button className="px-4 py-2 border border-black rounded-md">
                Images
              </button>
              <button className="px-4 py-2 border border-black rounded-md">
                Video
              </button>
              <button className="px-4 py-2 border border-black rounded-md">
                Music
              </button>
              <button className="px-4 py-2 border border-black rounded-md">
                Travel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[1px] mb-8">
         
          <div
            className="relative w-1/2 h-[350px] bg-fill bg-center"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${img3}) lightgray -98px -547.475px / 118.75% 480.337% no-repeat`
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="lg:text-xl uppercase items-center gap-2 lg:gap-6 flex font-lato mb-5"><FaArrowLeftLong  className="lg:text-4xl"/> previous post</p>
              <p className="lg:text-3xl flex font-rufina items-center text-center">7 Reasons to Start Your Day With Lemon <br /> Water</p>
            </div>
          </div>

          
          <div
            className="relative w-1/2 h-[350px] bg-cover bg-center"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${img5}) lightgray -98px -547.475px / 118.75% 480.337% no-repeat`
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="lg:text-xl flex items-center font-lato uppercase gap-2 lg:gap-6 mb-5">Next post <FaArrowRightLong  className="lg:text-4xl"/></p>
              <p className="lg:text-3xl flex font-rufina items-center text-center">12 Sparkling Wines We're Loving This <br /> Summer</p>
            </div>
          </div>
        </div>
        <Form/>
    </div>
  );
};

export default Post;
