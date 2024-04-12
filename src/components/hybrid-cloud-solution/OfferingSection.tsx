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
          <div className="row mb-30 mt-35 ">
            <h3 className="text-center">Hybrid Cloud solutions</h3>
            <h6 className="text-center">The sprint to multiple cloud environments has created challenges</h6>
            <div className="col-xl-6 col-lg-6 mt-35 mb-30 ">
              <div className="about-2-img">
                <div className="  ">
                  <div className="about-services-img" >
                    <Image className="about-services-img" src={icon2} alt="img-data" />
                  </div>
                  <div className="ml-35"> <h5>
                    Cost optimization
                  </h5>
                    <p >Managing IT costs as enterprises shift apps and data to cloud.</p>
                  </div>
                </div>

                <div className="mt-35">
                  <div className="about-services-img" >
                    <Image className="about-services-img" src={icon2} alt="img-data" />
                  </div>
                  <div className="ml-35">
                    <h5>Security gaps

                    </h5>
                    <p >Cloud adoption can create new network and security gaps.</p>
                  </div>
                </div>

                <div className="mt-35">
                  <div className="about-services-img" >
                    <Image className="about-services-img" src={icon2} alt="img-data" />
                  </div>
                  <div className="ml-35">
                    <h5>Data control and proximity

                    </h5>

                    <p >Regulatory, compliance, data sovereignty and Performance requirements.</p>
                  </div>
                </div>
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


                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>image-title
                        Complexity of ecosystem

                      </h5>

                      <p >Integration of multiple clouds, legacy apps and infrastructures.</p>
                    </div>
                  </div>
                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>
                        Skills gap

                      </h5>

                      <p >Lack of necessary skills to operate a modern and agile cloud platform.</p>
                    </div>
                  </div>
                  <div className="mt-35">
                    <div className="about-services-img" >
                      <Image className="about-services-img" src={icon2} alt="img-data" />
                    </div>
                    <div className="ml-35">
                      <h5>Innovation

                      </h5>

                      <p >Customers overwhelmed with competitive markets and increased IT demands creates lack of focus on business outcomes and in turn innovation.</p>
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
    </>
  );
};

export default AboutService;
