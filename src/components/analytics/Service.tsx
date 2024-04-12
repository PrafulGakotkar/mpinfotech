import React from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/icon/icon-3.png"
import IconFour from "../../../public/assets/img/icon/icon-4.png"
import IconFive from "../../../public/assets/img/icon/icon-5.png"
const Service = () => {
  return (
    <>
      <div
        className="services-area pt-120 pb-100"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center ml-50 mr-50 mb-80">
                {/* <span className="border-left-1"></span> */}
                <span>WHY CHOOSE CST</span>
                {/* <span className="border-right-1"></span> */}
                <h3>Managed IT services customized for your industry</h3>
                {/* <h6>The sprint to multiple cloud environments has created challenges</h6> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconOne} alt="" />
                </div>
                <div className="services-text">
                  <h3> Advanced AI
</h3>
                  <p className="text-center">Turn our AI research into your organization’s value with tools like Cloud AutoML, Cloud Natural Language…</p>
                  <Link style={{marginTop:50}} href="#">
                      <span className="services-button">
                       Discover Now{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconThree} alt="" />
                </div>
                <div className="services-text text-center">
                  <h3>Experts in deployed AI




                  </h3>
                  <p className="text-center">Our industry-specific AI solutions meet scalable vertical needs; cross-industry solutions like Contact Center AI…</p>
                  <Link style={{marginTop:50}} href="/cyber-information">
                      <span className="services-button">
                        Discover Now{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconFour} alt="" />
                </div>
                <div className="services-text text-center ">
                  <h3> Explainable AI

                  </h3>
                  <p className="text-center">From Explainable AI to our Inclusive ML Guide, our AI principles and responsible AI practices provide a foundation for…</p>
                  <Link style={{marginTop:55}} href="/Technology-consulting">
                      <span className="services-button">
                        Discover Now{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                </div>
              </div>
            </div>

            

          </div>

          
              {/* <div className="services-wrapper text-center" style={{ padding:0, background:'unset'}}>
                
                <div className="services-text">

                  <Link style={{marginTop:50}} href="/contact">
                      <span className="services-button">
                      Talk to a consultant{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                </div>
              </div> */}
            

          
        </div>
      </div>


    </>
  );
};

export default Service;
