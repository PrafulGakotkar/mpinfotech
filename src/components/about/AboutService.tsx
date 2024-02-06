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

const AboutService = () => {
  const path = usePathname();
  return (
    <>
      <div
        className={`services-area  ${path === "/service-2" || "/service-manage" ? "" : "pb-100"
          }`}
      >
        <div className="container">
          <div className="row mb-30 mt-35">
            <div className="col-xl-6 col-lg-6 mt-35 mb-30 ">
              {/* <div className="about-2-img">
                                </div> */}
              <div className="about-1-wrapper">
                <Image className='about-img' src={thumbOne} alt="img-data" />

                {/* <div className="about-button">
                                        <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30 mt-35 " style={{ color: "#FFFCF6" }}>

              <div className="about-1-wrapper">
                {/* <Image className='about-box-img' src={thumbOne} alt="img-data" /> */}
                <div className="">

                  {/* <span>Our Vision</span> */}
                  <h3>KEY MILESTONES</h3>
                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon} alt="img-data" />
                    </div>
                    <div className="ml-35"> <h5>Year 2022, MRADAR V2.0</h5>
                      <p >Planned release of MRADAR V 2.0 to enhance Cloud Transformation Security & Governance; Cost management; Multiplatform support.</p></div>
                  </div>

                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon1} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>Year 2016, MRADAR Ver 1.0,</h5>
                      <p >Released MRADAR V 1.0 to enabled our customers for Cloud Transformation and limited governance capabilities and support for Amazon Web Services (AWS).</p>
                    </div>
                  </div>

                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>Year 2009, Incorporated</h5>

                      <p >In 2009 was incorporated as S-Corp to provide IT service focused in Cyber Security and Security Technology.</p>
                    </div>
                  </div>

                </div>
                 <div className="about-button">
                                        <Link className="btn" href="/contact"><span className="btn-text">Contact Us <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div> 
              </div>
            </div>
          </div>
          {/* <div className="row">
            {serviceManageData.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className={item.class}>
                  <div className="services-icon">
                    <i className="fas fa-laptop-code"> </i>
                  </div>
                  <div className="services-text">
                    <h3> {item.title} </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking{" "}
                    </p>
                    <Link href={`/service-manage/${item.id}`}>
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutService;
