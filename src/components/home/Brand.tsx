"use client"
import React from "react";
import brandOne from "../../../public/assets/img/client/AgreeyaLogo.png";
import brandTwo from "../../../public/assets/img/client/atos.png";
import brandThree from "../../../public/assets/img/client/celebrate.png";
import brandFour from "../../../public/assets/img/client/finaclesoft.png";
// import brandFive from "../../../public/assets/img/brand/brand-05.png";
import Image from "next/image";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand = () => {
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

  ];

  return (
    <div className="brand-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="brand-title" > Our Clients</div>
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
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 4,
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
        </div>
      </div>
    </div >
  );
};

export default Brand;
