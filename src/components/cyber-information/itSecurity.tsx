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

const itSecurity = () => {


  return (
    <div className="gallery-area  pb-10">
      

      <section className="blog-area pt-40 pb-20 back-img-service" >
        <div className="container">


          <div className="row ">

            <div className="col-lg-6 pt-70">

              <div className="mb-40">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}

                  <h3 >IT Security Assessment & Risk Management</h3>
                </div>

                <div className="about-me mb-30">
                  <p> A security risk assessment identifies, assesses, and implements key security controls in applications. It also focuses on preventing application security defects and vulnerabilities. Carrying out a risk assessment allows an organization to view the application portfolio holistically—from an attacker’s perspective.</p>

                  <p>A security risk assessment identifies, assesses, and implements key security controls in applications. It also focuses on preventing application security defects and vulnerabilities. Carrying out a risk assessment allows an organization to view the application portfolio holistically—from an attacker’s perspective.</p>

                </div>

                <div>
                  <h3>Our Cybersecurity services</h3>
                </div>
                <div style={{ display: "flex", paddingTop: 30 }}>
                  <Image style={{ height: 30 }} src={imgTwo} alt="" />
                  <p style={{ paddingLeft: 30 }}>IT Security Assessment & Risk Management</p>
                </div>

                <div style={{ display: "flex", paddingTop: 30 }}>
                  <Image style={{ height: 30 }} src={imgTwo} alt="" />
                  <p style={{ paddingLeft: 30 }}>IT Cloud security & Governance</p>
                </div>
                <div style={{ display: "flex", paddingTop: 30 }}>
                  <Image style={{ height: 30 }} src={imgTwo} alt="" />
                  <p style={{ paddingLeft: 30 }}>IT Security Penetration testing</p>
                </div>
                <div className="services-text">
                    <Link href="/product">
                        <span className="services-button">
                            Our Products{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                    </Link>
                </div >

              </div>

            </div>

            <div className="col-lg-6 col-md-6">

              <div className=" mb-40">
                <div className="about-me cloud-img cloud-box" >
                  <div className=" col-xl-3 col-lg-3 col-md-6 image-box ml-30 mb-30" style={{backgroundColor : "#DFBAF0"}} /*style={{backgroundColor : "#6497bf"}} */ >
                    <div className="pt-30">
                      <Image style={{ height: 100, width: 120 }} src={imgThree} alt="" />
                      <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                        <h5>
                          Identify the risk</h5>
                        <ul>
                          <li className="text-white">Assets</li>
                          <li className="text-white">Scope</li>
                          <li className="text-white">Process Requirements</li>
                          <li className="text-white">Governance issues</li>
                          <li className="text-white">Strategic direction</li>
                          <li className="text-white">Operational Priorities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="about-me cloud-img cloud-box pt-30 mb-30 "> */}
                    <div className="col-lg-3 image-box ml-30 mb-30" style={{backgroundColor : "	#D29E82"}} /*style={{backgroundColor : "	#9fcbee"}} */  >
                      <div className="pt-30">
                        <Image style={{ height: 100, width: 120 }} src={imgFour} alt="" />
                        <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                          <h5>
                            Assess risk</h5>
                          <ul>
                            <li className="text-white">Risk Assessment</li>
                            <li className="text-white">Risk Ratings Matrix</li>
                            <li className="text-white">Impact Analysis</li>
                            <li className="text-white">Process Enhancement</li>
                            <li className="text-white">Requirements Specification</li>
                            <li className="text-white">Risk Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}


                </div>
                <div className="about-me cloud-img cloud-box" >
                  <div className=" col-xl-3 col-lg-3 col-md-6 image-box ml-30 mb-30" style={{backgroundColor : "#7CCDEF"}} /*style={{backgroundColor : "#ec9b00"}} */>
                    <div className="pt-30">
                      <Image style={{ height: 100, width: 120 }} src={imgFive} alt="" />
                      <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                        <h5>
                        Control the risk</h5>
                        <ul>
                          <li className="text-white">Preventive controls</li>
                          <li className="text-white">Risk mitigation controls</li>
                          <li className="text-white">Controls frameworks</li>
                          <li className="text-white">BCM planning</li>
                          <li className="text-white">Process planning</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="about-me cloud-img cloud-box pt-30 mb-30 "> */}
                    <div className="col-lg-3 image-box ml-30 mb-30" style={{backgroundColor : "#F2B5B4"}} /*style={{backgroundColor : "#c6d7ad"}} */ >
                      <div className="pt-30">
                        <Image style={{ height: 100, width: 120 }} src={imgSix} alt="" />
                        <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                          <h5>
                          Review the risk</h5>
                          <ul>
                          <li className="text-white">Preventive controls</li>
                          <li className="text-white">Risk mitigation controls</li>
                          <li className="text-white">Controls frameworks</li>
                          <li className="text-white">BCM planning</li>
                          <li className="text-white">Process planning</li>
                          
                        </ul>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}


                </div>

                
              </div>

            </div>


          </div>
        </div>
      </section>

      


    </div>
  );
};

export default itSecurity;
