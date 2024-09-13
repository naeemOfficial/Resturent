import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/comma.png";
import img2 from "../../assets/Avatar.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Swiper = () => {
  const cardsData = [
    {
      leftText: "John Doe",
      designation: "Bloger",
      imageName: img2,
      pageName: "1",
    },
    {
      leftText: "John Doe",
      designation: "Bloger",
      imageName: img2,
      pageName: "2",
    },
    {
      leftText: "John Doe",
      designation: "Bloger",
      imageName: img2,
      pageName: "3",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto py-[100px]">
      <Slider {...sliderSettings}>
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white p-4 ">
            <div className="flex-col">
              <div className="flex justify-between">
                <div className="text-left relative z-50">
                  <p className="font-rufina  lg:text-5xl lg:w-[1262px] font-bold lg:leading-[64px]">
                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus lorem id penatibus imperdiet. Turpis egestas ultricies
                    purus Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="absolute">
                  <img src={img1} alt="" className="w-[100px] ml-[640px] lg:w-auto lg:ml-[1100px]" />
                </div>
              </div>
              <div className="flex justify-between items-center lg:mt-28">
                <div className="flex items-center justify-between gap-5 lg:gap-10">
                  <img src={card.imageName} alt="" className="w-[100px] lg:w-auto"/>
                  <div>
                    <p className="font-rufina lg:text-[32px] font-bold">{card.leftText}</p>
                    <p className="text-[#4D4D4D] font-lato lg:text-lg">{card.designation}</p>
                  </div>
                </div>
                <div className="text-right lg:mr-28">
                  <p className="font-rufina font-bold lg:text-3xl">{card.pageName}</p>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Swiper;
