import React from "react";
import img from "../../assets/contact/Image5.png";

const Card2 = () => {
  return (
    <div className="container mx-auto px-4 pb-16 lg:pb-36">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
        <div className="p-4 text-center lg:text-left">
          <p className="text-lg md:text-xl lg:text-2xl text-[#233000] font-rufina font-bold mb-6">
            We are located in 1959 Sepulveda Blvd. Culver{" "}
            <br className="hidden lg:block" />
            City, CA, 90230
          </p>
          <button className="mt-4 px-6 py-3 lg:px-11 lg:py-5 text-black border-2 border-black font-rufina text-lg lg:text-2xl font-bold">
            View in maps
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={img}
            alt="Card Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Card2;
