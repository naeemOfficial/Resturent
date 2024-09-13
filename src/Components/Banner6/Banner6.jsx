import React from 'react';
import Image from '../../assets/about/Image14.png'; 

const Banner6 = () => {
  return (
    <div
      className="bg-cover h-screen bg-center relative"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="absolute inset-x-0 top-[50%] transform -translate-y-1/2 flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-[148px] font-bold font-rufina text-white mb-4 lg:mb-12">Who We Are</h1>
        <p className="lg:text-2xl font-bold text-center font-rufina text-white">The most important thing for us is to give you the <br /> comfortable dining experience</p>
      </div>
    </div>
  );
};

export default Banner6;
