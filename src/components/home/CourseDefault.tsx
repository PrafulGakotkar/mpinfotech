"use client"
import React from "react";
import Link from "next/link";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import thumbOne from "../../../public/assets/img/project/01.jpg";
import thumbTwo from "../../../public/assets/img/project/02.jpg";
import thumbThree from "../../../public/assets/img/project/03.jpg";
import thumbFour from "../../../public/assets/img/project/04.jpg";
import Image from "next/image";

const CourseDefault = () => {
  const casesData = [
    {
      id: 1,
      img: thumbOne,
      title:"Our Team ",
      subTitle:"People",
      url:"people"
    },
    {
      id: 2,
      img: thumbTwo,
      title:"Our Team ",
      subTitle:"Process",
      url:"process",
    },
    {
      id: 3,
      img: thumbThree,
      title:"Mp info ",
      subTitle:"Manage Service - Cloud Transformation",
      url:"manage-service",
    },
    {
      id: 4,
      img: thumbFour,
      title:"MP info ",
      subTitle:"Differentiators",
      url:"differentiators",
    },
    {
      id: 5,
      img: thumbTwo,
      title:"Our Team ",
      subTitle:"Process",
      url:"process",
      
    },
    {
      id: 6,
      img: thumbThree,
      title:"Mp info ",
      subTitle:"Manage Service - Cloud Transformation",
      url:"manage-service",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        observeParents={true}
        observer={true}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 2.5,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".case-button-next",
          prevEl: ".case-button-prev",
        }}
      >
        {casesData.map((item) => (
          <SwiperSlide key={item.id}>
             <div  className="col-12">
            <div className="project-wrapper">
              <div className="project-img">
                <Link href="#">
                  <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="" />
                </Link>
                <div className="project-text">
                  <span>{item.title}</span>
                  <h3>
                  <Link href={`/${item.url}`}> {item.subTitle}</Link>
                    {/* <Link href="/case-1">{item.subTitle}</Link> */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bd-trending__navigations">
        <button className="case-button-prev banner-button-prev slick-arrow">
          <i className="fa-regular fa-angle-left"></i>
        </button>
        <button className="case-button-next banner-button-next slick-arrow">
          <i className="fa-regular fa-angle-right"></i>
        </button>
      </div>
      
    </>
  );
};

export default CourseDefault;
