import React from "react";
import bannerImage from '../../assets/blog/banner.jpeg';

const Banner3 = () => {
  return (
    <div
      className="text-white p-4 lg:h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0.34) 100%), url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto py-28">
        <div className="px-4">
          <div className="font-rufina font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[148px] leading-tight pt-14 md:leading-[152px]">
            Blog List - One Column
          </div>
          <div className="pt-8 md:pt-[50px] font-rufina font-bold text-lg sm:text-xl md:text-2xl">
            It is an easy way to create your beautiful blog for daily
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
