"use client"
import React, { useEffect } from "react";
import brandOne from "../../../public/assets/img/new/deloitte.012a8b20.jpg";
import brandTwo from "../../../public/assets/img/new/crisil.d4c9604f.jpg";
import brandThree from "../../../public/assets/img/new/tavant.df24ea2a.jpg";
import brandFour from "../../../public/assets/img/new/mphasis.61a450c0.jpg";
import brandFive from "../../../public/assets/img/new/virtusa.4a0788a0.jpg";
import brandSix from "../../../public/assets/img/new/atos.a84c3951.jpg";
import brandSeven from "../../../public/assets/img/new/persistent.4443d6a2.png";
import brandEight from "../../../public/assets/img/new/apexon.d80575ac.jpg";
import brandNine from "../../../public/assets/img/new/tech-mahindra.891bbae0.jpg";
import brandTen from "../../../public/assets/img/new/wipro.c1e426f6.jpg";
import Image from "next/image";
import "swiper/css/bundle";
import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Partners = () => {
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
    <div className="brand-area pt-10 pb-130">
      <div className="container">
        <div className="brand-title" > Our Partners</div>
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
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandNine } alt="" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="brand-img">
              <Image className="brand-img1" src={brandTen } alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Partners;
