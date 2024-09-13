import React from "react";
import img1 from "../../assets/about/Image13.png";
import img2 from "../../assets/about/Tomato.png";

const Card3 = () => {
  return (
   <div className="container mx-auto py-44">
     <div className="flex flex-col lg:flex-row items-center justify-between p-8">
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-4xl lg:text-[108px] font-rufina font-bold mb-4 lg:mb-12">Our Story</h2>
        <p className="text-sm lg:text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. Turpis egestas ultricies <br /> purus auctor tincidunt lacus nunc. 
        </p>
      </div>

      <div className="relative">
        {/* Overlay Image (img2) */}
        <img
          src={img2}
          alt="Overlay Image"
          className="absolute -top-12 -left-28 transform -translate-x-8 -translate-y-8 w-1/3 h-auto z-0"
        />

       
        <img
          src={img1}
          alt="Main Image"
          className="relative w-[700px] h-[567px] z-10 object-cover"
        />
      </div>
    </div>
   </div>
  );
};

export default Card3;
