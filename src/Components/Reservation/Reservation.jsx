import React, { useState } from "react";
import TimeSelect from "./Time";

const Reservation = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleNumberOfPersonsChange = (e) => {
    setNumberOfPersons(e.target.value);
  };

  return (
    <div className="bg-[#EBF0E4] py-[150px] px-4">
      <div className="container mx-auto">
        <div className="text-center">
          <div className=" text-black text-4xl lg:text-[108px] font-bold font-rufina lg:leading-[120px]">
            Make a Reservation
          </div>
          <div className=" text-neutral-600 text-lg lg:text-2xl font-Lato leading-[33.60px] tracking-wide mt-5">
            Get in touch with restaurant
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row lg:justify-between items-center py-12 lg:py-[150px] space-y-6">
          <div className="mt-5">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="px-[130px] lg:px-[150px] py-4 border-2 border-black justify-center items-center bg-transparent"
            />
          </div>

          <div>
            <TimeSelect value={selectedTime} onChange={handleTimeChange} />
          </div>

          <div>
            <select
              value={numberOfPersons}
              onChange={handleNumberOfPersonsChange}
              className="w-[400px] py-4 px-3 border-2 border-black justify-center bg-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} Person{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-[200px] lg:w-[344px] h-[88px] lg:px-[46px] lg:py-5 bg-lime-950 border-2 border-black justify-center items-center gap-2.5 mx-auto flex">
          <div className="text-white text-[20px] lg:text-[32px] font-bold font-['Rufina'] leading-[48px]">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
