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
                <span>SERVICES WE DELIVER</span>
                {/* <span className="border-right-1"></span> */}
                <h1>Preparing for your success,<br />
                  we provide truly prominent IT solutions.</h1>
                {/* <h6>The sprint to multiple cloud environments has created challenges</h6> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconOne} alt="" />
                </div>
                <div className="services-text">
                  <h3> Advisory Services</h3>
                  <p className="text-center"> Understand Stakeholder Requirements<br />
                    Business and IT Alignment Strategy<br />
                    Project Planning and Roadmap<br />
                    Product Evaluation and Selection<br />
                    Explain Product Evolution<br />
                    Technical Documentation and Presentation</p>
                  {/* <Link style={{marginTop:50}} href="/contact">
                      <span className="services-button">
                       Join Us Now{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconThree} alt="" />
                </div>
                <div className="services-text text-center">
                  <h3>Architecture Services

                  </h3>
                  <p className="text-center">Architecture Assessment Process <br />
                    Migration Strategy<br />
                    Platform and Technology Assessment<br />
                    Cloud and Hybrid Solutions<br />
                    API Compliance and Governance<br />
                    API Economy and Reusability</p>
                  {/* <Link style={{marginTop:50}} href="/cyber-information">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconFour} alt="" />
                </div>
                <div className="services-text text-center ">
                  <h3> Managed Services
                  </h3>
                  <p className="text-center"> Platform Support and Maintenance <br />
                    On-boarding Support<br />
                    Compliance Enforcement and Governance<br />
                    Quality Assurance and Quality Control<br />
                    Continuous Solution Improvements<br />
                    Post Implementation Support</p>
                  {/* <Link style={{marginTop:55}} href="/Technology-consulting">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconFive} alt="" />
                </div>
                <div className="services-text text-center ">
                  <h3> Integration Implementation

                  </h3>
                  <p className="text-center">CoE and Platform Setup (ex: Mulesoft C4E) <br />
                    End to End ESB Development<br />
                    API Monetization Enablement<br />
                    Process Automation<br />
                    API Development and Implementation<br />
                    API Logging and Monitoring</p>
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

          
              <div className="services-wrapper text-center" style={{ padding:0, background:'unset'}}>
                
                <div className="services-text">

                  <Link style={{marginTop:50}} href="/contact">
                      <span className="services-button">
                      Talk to a consultant{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                </div>
              </div>
            

          
        </div>
      </div>


    </>
  );
};

export default Service;
