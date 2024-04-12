"use client";
import Link from "next/link";
import React from "react";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { serviceManageData } from "@/data/service-manage-data";
import thumbOne from "../../../public/assets/img/about/home_img-03.png"
import icon from "../../../public/assets/img/about/chek_g.png"
import icon1 from "../../../public/assets/img/about/chek_o.png"
import icon2 from "../../../public/assets/img/about/chek_b.png"
import img1 from "../../../public/assets/img/new/Scope-Of-Managed-Services.48a88b1d.png"


const AboutService = () => {
  const path = usePathname();
  return (
    <>
      <div
        className={`services-area  ${path === "/service-2" || "/service-manage" ? "" : "pb-100"
          }`}
      >
        <div className="container">
          <div className="row mb-30 mt-35 ">
            <h3 className="text-center">Our Objective</h3>
            <div className="col-xl-6 col-lg-6 mt-35 mb-30 ">
              <div className="about-2-img">
                <p>Our services are designed to provide comprehensive protection for your organization’s assets and data, with a focus on risk management, threat detection and response, and compliance.</p>
                <p>The main objective of this engagement is to provide Holistic Security and ensure the organization is secure from various Cyber Security threats. <br />
                  CST team will act as an extended team to the client.</p>
              </div>
              <div className="about-1-wrapper">
                {/* <Image className='about-img' src={thumbOne} alt="img-data" /> */}

                {/* <div className="about-button">
                                        <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30  " style={{ color: "#FFFCF6" }}>

              <div className="about-1-wrapper">
                {/* <Image className='about-box-img' src={thumbOne} alt="img-data" /> */}
                <div className="">

                  {/* <span>Our Vision</span> */}
                  {/* <h3>Our Objective</h3> */}
                  <div className="  ">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35"> <h5>Infrastructure</h5>
                      {/* <p >Security & Risk Assessment</p> */}
                    </div>
                  </div>

                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>Application
                      </h5>
                      {/* <p >Security & Risk Assessment</p> */}
                    </div>
                  </div>

                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>Cloud
                      </h5>

                      {/* <p >Security & Risk Assessment</p> */}
                    </div>
                  </div>
                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>Cyber Security
                      </h5>

                      {/* <p >Security & Risk Assessment</p> */}
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="about-button text-center">
              <Link className="btn" href="/contact"><span className="btn-text">Contact Us <i className='fas fa-long-arrow-alt-right'></i></span></Link>
            </div>
          </div>





        </div>
      </div>

      <section className="blog-area pt-100 pb-35 " >
        <div className="container">
          <h2 className="text-center">Scope Of Managed Services</h2>
          <div className="row ">
            <Image style={{ height: "100%", width: "100%" }} src={img1} alt="" />


          </div>



        </div>
      </section>
    </>
  );
};

export default AboutService;
