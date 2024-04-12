import React from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/icon/icon-5.png"
import IconFour from "../../../public/assets/img/icon/icon-6.png"
const AboutService = () => {
  return (
    <>
      <div
        className="services-area pt-120 pb-100"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center ml-50 mr-50 mb-80">
                {/* <span className="border-left-1"></span> */}
                {/* <span>what we do</span> */}
                {/* <span className="border-right-1"></span> */}
                <h1>Our Migration Services</h1>
                <h6>Expertly moving business services across technologies, minimizing risk, disruption and downtime</h6>
              </div>
            </div>
          </div>
          <div className="row">
           
              <div  className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconOne}  alt="" />
                  </div>
                  <div className="services-text">
                    <h4> Scoping and profiling</h4>
                    {/* <p> Thank you for choosing Cyber Space as your technology partner. We offer a range of solutions and services that include Cyber Security, Cloud FinOps, Migration, ManageIT and other cutting-edge technologies to support your organisation.</p> */}
                    {/* <Link style={{marginTop:50}} href="/contact">
                      <span className="services-button">
                       Join Us Now{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>

              
              <div  className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconThree}  alt="" />
                  </div>
                  <div className="services-text text-center">
                    <h4>First Mover
</h4>
                    {/* <p> Founder & CEO</p> */}
                    {/* <Link style={{marginTop:50}} href="/cyber-information">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>

              <div  className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconFour}  alt="" />
                  </div>
                  <div className="services-text text-center ">
                    <h4> Application migration factory</h4>
                    {/* <p> Head Global Business Development </p> */}
                    {/* <Link style={{marginTop:55}} href="/Technology-consulting">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div  className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconTwo}  alt="" />
                  </div>
                  <div className="services-text text-center ">
                    <h4> Image migration factory</h4>
                    {/* <p> Head Global Business Development </p> */}
                    {/* <Link style={{marginTop:55}} href="/Technology-consulting">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
         


          </div>
        </div>
      </div>

     </>
  );
};

export default AboutService;
