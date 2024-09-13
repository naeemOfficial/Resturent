import React from "react";
import img from "../../assets/contact/Mint.png";

const ReservationForm = () => {
  return (
    <div className="bg-[#EBF0E4] py-20 md:py-40 px-4 md:px-6">
      {/* Container for the title and description */}
      <div className="container mx-auto text-center mb-8 relative">
        <img
          src={img}
          alt="Background"
          className="absolute -top-5 left-10 transform -translate-x-1/4 -translate-y-1/4 w-40 sm:w-[300px] md:w-[511px]"
        />
        <h2 className="text-4xl sm:text-6xl md:text-[108px] font-bold font-rufina relative z-10">
          Make a Reservation
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg relative z-10 mb-12 md:mb-28">
          Get in touch with the restaurant
        </p>
      </div>

      {/* Reservation form */}
      <form className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:gap-10">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="border-[2px] border-black px-4 py-3 md:py-5 bg-transparent placeholder-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-[2px] border-black px-4 py-3 md:py-5 bg-transparent placeholder-black focus:outline-none"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border-[2px] border-black px-4 py-3 md:py-5 bg-transparent placeholder-black focus:outline-none"
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone"
          className="border-[2px] border-black px-4 py-3 md:py-5 bg-transparent placeholder-black focus:outline-none"
        />

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="date"
            className="border-[2px] border-black px-4 py-3 md:py-5 bg-transparent placeholder-black focus:outline-none"
          />
          <input
            type="time"
            className="border-[2px] border-black px-4 py-3 md:py-5 bg-transparent placeholder-black focus:outline-none"
          />
        </div>

        {/* Number of persons */}
        <div>
          <select className="border-[2px] border-black px-4 py-3 md:py-5 bg-transparent placeholder-black focus:outline-none">
            <option value="">Select Number of Persons</option>
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i + 1 === 1 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Submit Button */}
      <div className="flex justify-center pt-10 md:pt-14">
        <button
          type="submit"
          className="bg-[#5E6600] text-white font-rufina text-xl md:text-[32px] py-3 md:py-4 px-10 md:px-12"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
