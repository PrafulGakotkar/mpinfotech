import React from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/icon/icon-5.png"
import img1 from "../../../public/assets/img/new/cloud12.a03e0a59.png"
const AboutService = () => {
    return (
        <>
            <div
                className="services-area pt-120 pb-100"
                style={{ backgroundImage: `url(${bgImg.src})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 ">
                            <div className="section-title text-center  mb-80">
                                {/* <span className="border-left-1"></span> */}
                                <span>MULESOFT PRACTICE CAPABILITIES</span>
                                {/* <span className="border-right-1"></span> */}
                                <h2>
                                    Our Certified MuleSoft Consultants provide unique Value and Innovation
                                    to the Clients through <span style={{ color: '#2AAFE0' }}>  Strategy, Center of Excellence, Technology
                                        Consulting, Best Practices and Solution Accelerators</span>

                                </h2>
                                {/* <h6>Expertly moving business services across technologies, minimizing risk, disruption and downtime</h6> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="blog-area pt-100 pb-35 " >
        <div className="container">
          {/* <h2 className="text-center">Scope Of Managed Services</h2> */}
          <div className="row ">
            <Image style={{ height: "100%", width: "100%" }} src={img1} alt="" />


          </div>
          <div className="services-wrapper text-center" style={{ padding:0, background:'unset'}}>
                
                <div className="services-text">

                  <Link style={{marginTop:50}} href="/contact">
                      <span className="services-button">
                      Contact Us{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                </div>
              </div>



        </div>
      </section>

        </>
    );
};

export default AboutService;
