import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import myImage from '../../assets/about/Image15.png';

const VIdeo = () => {
  return (
    <div className="relative h-screen bg-cover bg-center px-4" style={{ backgroundImage: `url(${myImage})` }}>
      <div className="absolute inset-0 bg-[var(--233000,#233000)] opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl lg:text-[108px] font-rufina font-bold leading-[120px] lg:mb-4">It looks delicious</h1>
        <p className="lg:text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button className=" text-black px-6 py-2 rounded-full">
          <IoPlayCircleOutline  className="text-white text-6xl lg:text-[100px]"/>
        </button>
      </div>
    </div>
  );
};

export default VIdeo;
