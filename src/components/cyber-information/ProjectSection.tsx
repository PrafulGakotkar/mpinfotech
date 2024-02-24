"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/Cyber-Security-Instagram-Post-1536x1536.png";
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
import CyberAccordion from "./CyberAccordion";

const ProjectSection = () => {


  return (
    <div className="gallery-area  pb-10">
      <section className="blog-area pt-40 " >
        <div className="container">


          <div className="row ">
            <div className="col-lg-6">

              <div className=" mb-40">
                <div className="about-me">
                  <Image style={{ height: "100%", width: "100%" }} src={imgOne} alt="" />

                </div>
              </div>

            </div>
            <div className="col-lg-6 pt-60">

              <div className="mb-40">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  {/* <h5>OUR VISION</h5> */}
                  <h3 >Cyber / Information Security</h3>
                </div>

                <div className="about-me mb-30 ">
                  <p> Cybersecurity protects internet-connected and internally connected systems, including hardware, software, and data, from cyberattacks. Provide Security & Governance advisory services and performs Penetration testing.</p>
                  <p>Cybersecurity is the protection of internet-connected and internally connected systems, including hardware, software, and data, from cyberattacks. In a computing context, security encompasses cybersecurity and physical security — both are used by enterprises to protect against unauthorized access to data centers and other computerized systems. ‘Cyber risk’ means any risk of financial loss, disruption, or damage to the reputation of an organization from some sort of failure of its information technology systems.</p>
                  <p>Organizations must integrate ‘cyber risk management’ into day-to-day operations. Additionally, a company must be prepared to respond to the inevitable cyber incident, restore normal operations and ensure that company assets and the company’s reputation are protected.</p>
                  {/* <p>Organizations must integrate ‘cyber risk management’ into day-to-day operations. Additionally, a company must be prepared to respond to the inevitable cyber incident, restore normal operations and ensure that company assets and the company’s reputation are protected.

                  </p> */}
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
