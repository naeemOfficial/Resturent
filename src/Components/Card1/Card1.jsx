import React from "react";
import img from "../../assets/contact/img.jpeg";
import img1 from "../../assets/contact/Orange.png";

const CardSection = () => {
  return (
    <div className="my-32 px-4">
      <div className="container mx-auto relative flex flex-col lg:flex-row gap-10 lg:gap-60 py-12 lg:py-48">
        
        {/* Background image positioned absolutely */}
        <div className="absolute top-10 lg:top-[60px] lg:left-[400px] xl:left-[630px] lg:w-[300px] xl:w-[446px] h-[200px] lg:h-[300px] xl:h-[391px] z-0">
          <img
            src={img1}
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Left Image */}
        <div className="relative z-10 w-full lg:w-[500px] xl:w-[792px] h-[300px] lg:h-[450px] xl:h-[593px]">
          <img
            src={img}
            alt="Main Left Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Information */}
        <div className="relative z-10 flex flex-col justify-end lg:mb-10 space-y-4 text-center lg:text-left">
          <p className="text-xl lg:text-2xl text-[#233000] font-rufina font-bold">
            We can be contacted via
          </p>
          <p className="text-xl lg:text-2xl text-[#233000] font-rufina font-bold">
            email <span className="text-[#9CAA00]">info@foodzero.com</span>
          </p>
          <p className="text-xl lg:text-2xl text-[#233000] font-rufina font-bold">
            or telephone on <span className="text-[#9CAA00]">+86 852 346 000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
