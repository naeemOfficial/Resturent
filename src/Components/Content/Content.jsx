import React from "react";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import bgImage from "../../assets/comma.png";
import img4 from "../../assets/avatar2.png";

const Content = () => {
  return (
    <div className="">
      <div className="mb-6">
        <p className="mt-2 text-start text-[#4D4D4D] font-lato text-[18px] mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor
          tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis.
          Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
          imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <img
            src={img1}
            alt="Image 1"
            className="w-[800px] h-[748px] object-cover"
          />
        </div>

        <div className=" grid grid-cols-1 gap-6">
          <img
            src={img2}
            alt="Image 2"
            className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
          />
          <img
            src={img3}
            alt="Image 3"
            className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-start text-[#4D4D4D] font-lato text-[18px] py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor <br />
          tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis.
          Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="relative mt-20">
        <div
          className="relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center right",
            backgroundSize: "300px 250px",
            height: "300px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-start text-[#5E6600] font-lato text-[34px] font-bold bg-opacity-50 px-4 py-2 rounded-md">
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-start text-[#4D4D4D] font-lato text-[18px] py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor
          tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis.
          Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
          Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis
          pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc,
          arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Purus lorem id penatibus imperdiet.
        </p>
      </div>

      <div className="mt-20 flex items-center">
        <p className="text-start text-black font-rufina text-[24px] font-bold mr-4">
          Tags:
        </p>
        <div className="flex flex-wrap gap-4">
          <button className=" text-black px-4 py-2 rounded-md border border-black">
            Design
          </button>
          <button className="text-black px-4 py-2 rounded-md border border-black">
            Photography
          </button>
          <button className="text-black px-4 py-2 rounded-md border border-black">
            Images
          </button>
          <button className="text-black px-4 py-2 rounded-md border border-black">
            Video
          </button>
          <button className="text-black px-4 py-2 rounded-md border border-black">
            Music
          </button>
          <button className="text-black px-4 py-2 rounded-md border border-black">
            Travel
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 py-20 ">
        <div>
          <div className="lg:w-[220px] lg:h-[220px] overflow-hidden rounded-full mr-5">
            <img
              src={img4}
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="lg:text-2xl font-rufina font-bold text-black">Julie Christie</h2>
          <p className="lg:text-lg text-[#6D6D6D] mt-2">
            John is a skilled developer with experience in React.js, Next.js,
            and building responsive web applications. He loves creating
            user-friendly designs and solving complex problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
