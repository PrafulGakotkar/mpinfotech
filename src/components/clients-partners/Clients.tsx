"use client"
import React, { useEffect } from "react";
import brandOne from "../../../public/assets/img/new/johnson.5e2c5079.jpg";
import brandTwo from "../../../public/assets/img/new/merck.fffa97c3.jpg";
import brandThree from "../../../public/assets/img/new/google.37231aea.png";
import brandFour from "../../../public/assets/img/new/newell.e8d4d1cd.jpg";
import brandFive from "../../../public/assets/img/new/idexx.c44ccca9.jpg";
import brandSix from "../../../public/assets/img/new/blue-cross.57f67bff.png";
import brandSeven from "../../../public/assets/img/new/verisk.75453ffe.png";
import brandEight from "../../../public/assets/img/new/bed-bath.3422153a.jpg";
import Image from "next/image";
import "swiper/css/bundle";
import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Clients = () => {
  useEffect(() => {
    SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay]);
  }, []);

  const brandLogos = [
    {
      id: 1,
      logo: brandOne,
    },
    {
      id: 2,
      logo: brandTwo,
    },
    {
      id: 3,
      logo: brandThree,
    },
    {
      id: 4,
      logo: brandFour,
    },
    {
      id: 5,
      logo: brandFive,
    },
    {
      id: 6,
      logo: brandSix,
    },
    {
      id: 7,
      logo: brandSeven,
    },
    {
      id: 8,
      logo: brandEight,
    },

  ];

  return (
    <div className="brand-area pt-130 pb-130">
      <div className="container">
        <div className="brand-title" > Our Clients</div>
        {/* <div className="row">
          <div className="col-xl-12">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              loop={true}
              observeParents={true}
              observer={true}
              centeredSlides={false}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                },
                1700: {
                  slidesPerView: 4,
                },
              }}
              navigation={{
                nextEl: ".bd-amenities-slider-next",
                prevEl: ".bd-amenities-slider-prev",
              }}
            >
              {brandLogos.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="brand-img">
                    <Image className="brand-img1" src={item.logo} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div> */}

        <div className="row">
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandOne } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandTwo } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandThree } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandFour } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandFive } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandSix } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandSeven } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandEight } alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Clients;
