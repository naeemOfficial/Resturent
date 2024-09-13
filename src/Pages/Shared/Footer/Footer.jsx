import React from "react";
import img1 from "../../../assets/YumYum.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-28">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="flex flex-col lg:flex lg:flex-row items-center gap-10 lg:gap-32 px-5">
          <img src={img1} alt="Logo" className="h-28 w-48" />

          <div className="flex flex-col text-left">
            <a href="#" className="font-rufina text-[32px] font-bold mb-7">
              Contact Us
            </a>
            <p>+1+86 852 346 000</p>
            <p>info@foodzero.com</p>
            <div className="mt-8">
              <p>1959 Sepulveda Blvd.</p>
              <p>Culver City, CA, 90230</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6 px-4">
          <div>
            <h1 className="font-rufina text-left text-2xl md:text-[32px] font-bold mb-10 ">
              Never Miss a Recipe
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full lg:w-[523px] lg:h-20 px-4 lg:px-6 py-3 border-2 border-white flex justify-center items-center mr-5">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-full text-white lg:text-2xl font-normal font-['Lato'] bg-transparent border-none outline-none placeholder-white tracking-wide"
              />
            </div>
            <button className="px-5 lg:px-[36px] lg:py-5 bg-lime-700 flex justify-center items-center gap-2.5">
              <div className="text-white lg:text-[32px] font-bold font-Rufina leading-[48px]">
                Subscribe
              </div>
            </button>
          </div>

          <div className="text-white text-sm font-normal font-Lato tracking-tight mt-5">
            Join our subscribers and get best recipe delivered each week!
          </div>
        </div>
      </div>
      <div className="container mx-auto flex space-x-1 mt-24">
        {Array.from({ length: 260 }, (_, index) => (
          <div
            key={index}
            className="w-[2px] h-[2px] bg-white rounded-full"
          ></div>
        ))}
      </div>
      <div className="container mx-auto flex flex-col lg:flex lg:flex-row justify-between py-8">
        <div className=" text-white text-lg font-normal font-['Lato'] leading-[33.60px] tracking-wide px-4">
          © 2020 Zero Inc. All rights Reserved
        </div>
        <div className="flex lg:justify-between text-xl gap-4 px-4">
          <FaInstagram />
          <FaTwitter />
          <IoLogoFacebook />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
