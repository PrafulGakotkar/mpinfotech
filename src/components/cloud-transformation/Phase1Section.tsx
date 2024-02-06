"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/home7_img_01.png";
import imgTwo from "../../../public/assets/img/service/blue-chek-icon.png";
import imgThree from "../../../public/assets/img/service/icon1.png";
import imgFour from "../../../public/assets/img/service/icon2.png";
import imgFive from "../../../public/assets/img/service/icon3.png";
import imgSix from "../../../public/assets/img/service/icon4.png";
import imgSeven from "../../../public/assets/img/service/SECURITY.png";
import imgEight from "../../../public/assets/img/service/softwra.jpg";
import imgNine from "../../../public/assets/img/service/Minimal-Padlock-Cyber-Security-Logo-1024x1024.png";
import imgTen from "../../../public/assets/img/service/softwra.jpg";
import { casesData } from "@/data/case-data";
// import CyberAccordion from "./CyberAccordion";

const Phase1Section = () => {


  return (
    <div className="gallery-area  pb-10">
      <section className="blog-area pt-40 " >
        <div className="container">


          <div className="row ">
            <div className="col-lg-6">

              <div className=" mb-40 pt-70">
                <div className="about-me">
                  <Image style={{ height: "100%", width: "100%" }} src={imgOne} alt="" />

                </div>
              </div>

            </div>
            <div className="col-lg-6 pt-60">

              <div className="mb-40">


                <div className="about-me mb-30 ">
                  <p> Accelerate transformation with our portfolio of secure-by-design cloud solutions. We use proven methodologies to consult, plan, design, migrate, secure, operate, and optimize the infrastructure that runs your critical business applications, enabling you to use the power of the cloud to reduce the time to market and drive efficiency in your organization.</p>

                  <div className="services-text">
                    <Link href="/contact">
                      <span className="services-button">
                        Our Offering{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div ><br />
                  <div className="widget-title-box mb-30">
                    <span className="animate-border"></span>
                    <h5>PHASE 1</h5>
                    <h3 >Migration Preparation and Business Planning</h3>
                  </div>
                  <p>
                    Here you determine the right objectives and begin to get an idea of the types of benefits you will see. It starts with some foundational experience and developing a preliminary business case for a migration. This requires taking your objectives into account, along with the age and architecture of your existing applications, and their constraints.
                  </p>

                </div>
              </div>

            </div>


          </div>
        </div>
      </section>

     


    </div>
  );
};

export default Phase1Section;
