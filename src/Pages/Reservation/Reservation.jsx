import React from "react";
import img from "../../assets/BurgerPNG.png";

const Reservation = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 lg:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between py-40 lg:py-32">
        {/* Booking Form */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Booking
          </h2>
          <form className="space-y-4">
            {/* Date & Time */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="date"
                className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2"
                required
              />
              <input
                type="time"
                className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>

            {/* People Selection */}
            <div>
              <label className="block mb-2">People</label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2">
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} person{i + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* First Name & Last Name */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>

            {/* Comment Box */}
            <textarea
              placeholder="Comment"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
              rows="3"
            ></textarea>

            {/* Book Now Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#4D7C0F] text-white font-semibold rounded-md hover:bg-green-700"
            >
              Book Now
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={img}
            alt="Reservation"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
