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
                  <h5>OUR VISION</h5>
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
                    <Link href="/contact">
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
                  <div className=" col-xl-3 col-lg-3 col-md-6 image-box ml-30 mb-30" >
                    <div className="pt-20">
                      <Image style={{ height: 100, width: 120 }} src={imgThree} alt="" />
                      <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                        <h5>
                          Identify the risk</h5>
                        <ul>
                          <li>Assets</li>
                          <li>Scope</li>
                          <li>Process Requirements</li>
                          <li>Governance issues</li>
                          <li>Strategic direction</li>
                          <li>Operational Priorities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="about-me cloud-img cloud-box pt-30 mb-30 "> */}
                    <div className="col-lg-3 image-box ml-30 mb-30"  >
                      <div className="pt-30">
                        <Image style={{ height: 100, width: 120 }} src={imgFour} alt="" />
                        <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                          <h5>
                            Assess risk</h5>
                          <ul>
                            <li>Risk Assessment</li>
                            <li>Risk Ratings Matrix</li>
                            <li>Impact Analysis</li>
                            <li>Process Enhancement</li>
                            <li>Requirements Specification</li>
                            <li>Risk Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}


                </div>
                <div className="about-me cloud-img cloud-box" >
                  <div className=" col-xl-3 col-lg-3 col-md-6 image-box ml-30 mb-30" >
                    <div className="pt-20">
                      <Image style={{ height: 100, width: 120 }} src={imgFive} alt="" />
                      <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                        <h5>
                        Control the risk</h5>
                        <ul>
                          <li>Preventive controls</li>
                          <li>Risk mitigation controls</li>
                          <li>Controls frameworks</li>
                          <li>BCM planning</li>
                          <li>Process planning</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="about-me cloud-img cloud-box pt-30 mb-30 "> */}
                    <div className="col-lg-3 image-box ml-30 mb-30"  >
                      <div className="pt-30">
                        <Image style={{ height: 100, width: 120 }} src={imgSix} alt="" />
                        <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
                          <h5>
                          Review the risk</h5>
                          <ul>
                          <li>Preventive controls</li>
                          <li>Risk mitigation controls</li>
                          <li>Controls frameworks</li>
                          <li>BCM planning</li>
                          <li>Process planning</li>
                          
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

      <section className="blog-area pt-40 pb-5 " >
        <div className="container">


          <div className="row ">
            <div className="col-lg-6">

              <div className=" mb-5">
                <div className="about-me">
                  <Image style={{ height: "100%", width: "100%" }} src={imgSeven} alt="" />

                </div>
              </div>

            </div>
            <div className="col-lg-6 pt-60">

              <div className="mb-5">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  <h3 >IT Security Penetration Testing</h3>
                </div>

                <div className="about-me mb-30 ">
                  <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p>

                  <p> <span className="dot"></span> Find weaknesses in systems.</p>
                  <p><span className="dot"></span>  Assess and determine the robustness of controls implemented</p>
                  <p><span className="dot"></span>  Provide qualitative and quantitative data on current security posture and budget priorities for management.</p>
                </div>
              </div>

            </div>


          </div>

          <div className="row ">

            <div className="col-lg-6 pt-60">

              <div className="mb-40">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  <h3 >Pen Testers use both Manual and Automated way of Testing</h3>
                </div>

                <div className="about-me mb-30 ">
                  <h6>Manual pen testing</h6>
                  <p>Manual pen testing is a key element to uncovering vulnerabilities and weaknesses and tests business logic that automated testing can overlook (e.g., data validation and integrity checks). A manual pen tester can also help identify false positives reported by automated testing. Because pen testers are experts who think like adversaries, they can analyze data to target their attacks and test systems and websites in ways automated testing solutions cannot.</p><br />

                  <h6>Automated testing</h6>
                  <p> Automated testing generates results faster and needs fewer specialized professionals than a fully manual pen testing process. Automated testing tools track results automatically and can sometimes export them to a centralized reporting platform.</p>
                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className=" ">
                <div className="about-me">
                  <Image style={{ height: "500px", width: "100%" }} src={imgEight} alt="" />

                </div>
              </div>

            </div>


          </div>

        </div>
      </section>

      <section className="blog-area  pb-10 back-img-service" >
        <div className="container">


          <div className="row ">

            <div className="col-lg-6 pt-10">
              <div className="mt-50">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  <h3 >What is White box vs black box vs grey box pen testing</h3>
                </div>

                <div className="about-me ">
                  <CyberAccordion />
                </div>
              </div>
            </div>



            <div className="col-lg-6">
              <div className=" mb-10">
                <div className="about-me">
                  <Image style={{ height: "500px", width: "100%" }} src={imgNine} alt="" />
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
