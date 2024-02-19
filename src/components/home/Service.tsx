import React from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/icon/icon-3.png"
import IconFour from "../../../public/assets/img/icon/icon-4.png"
const Service = () => {
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
                <span className="border-left-1"></span>
                <span>what we do</span>
                <span className="border-right-1"></span>
                <h1>We provide exclusive services for your busainess</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {/* {serviceDataTwo.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image src={item.img} alt="" />
                  </div>
                  <div className="services-text">
                    <h3> {item.title} </h3>
                    <p> {item.details} </p>
                    <Link href={`/service-details/${item.id}`}>
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))} */}



              <div  className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconOne}  alt="" />
                  </div>
                  <div className="services-text">
                    <h3> Software Development </h3>
                    <p> DEVELOP SOFTWARE FOR IN-HOUSE AND CLIENT-RELATED PROJECTS. </p>
                    <Link style={{marginTop:50}} href="/software-development">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div  className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconTwo}  alt="" />
                  </div>
                  <div className="services-text">
                    <h3> Cloud Transformation </h3>
                    <p> TRANSITION BUSINESS DATA, APPS, AND SOFTWARE TO THE CLOUD. DESIGN, BUILD AND OPERATE. </p>
                    <Link href="/cloud-transformation">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div> */}

              <div  className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconThree}  alt="" />
                  </div>
                  <div className="services-text">
                    <h3>Information / Cybersecurity</h3>
                    <p> PROTECTING INFORMATION BY PREVENTING, DETECTING, AND RESPONDING TO CYBER-ATTACKS. </p>
                    <Link style={{marginTop:50}} href="/cyber-information">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div  className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="services-wrapper text-center">
                  <div className="services-img">
                    <Image style={{padding:0}} src={IconFour}  alt="" />
                  </div>
                  <div className="services-text">
                    <h3> Technology Consulting </h3>
                    <p> HELP CLIENTS WITH TALENTED TECHNICAL PROFESSIONALS. </p>
                    <Link style={{marginTop:55}} href="/Technology-consulting">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
         


          </div>
        </div>
      </div>

      <div className="about-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="about-text">
                <span>why choose us</span>
                <h3>
                  WELCOME TO MPIT
                </h3>

                <p>
                  We have created a strategic partnership with leading technology companies and combined this partnership with our industry-experienced teams, best practices, and processes to help our clients to maximize the IT investment and time to market.
                </p>
                <Link href="/contact">
                  Contact Us <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="about-img">
                <div>
                  <div style={{ position: "absolute" }}>
                    <h1>20+</h1><p>Employees</p>
                  </div>
                  <div style={{ borderLeft: "1px solid aqua",
                  height: "80px",
                  position: "absolute",
                  // left: "50%",
                  marginLeft: "9rem"}}>

                </div>
                  <div style={{ marginLeft: 200 }}>
                    <p>Men and women, committed to better protect you around the world.</p></div>
                </div>
                <div style={{ marginTop: 50 }}>
                  <div style={{ position: "absolute" }}>
                    <h1>150+</h1><p>Projects</p>
                  </div>
                  <div style={{ borderLeft: "1px solid aqua",
                  height: "80px",
                  position: "absolute",
                  // left: "50%",
                  marginLeft: "9rem"}}>

                </div>
                  <div style={{ marginLeft: 200 }}>
                    <p>Where you will find the same quality of service and dedication around the world.</p></div>
                </div>
                <div style={{ marginTop: 50 }}>
                  <div style={{ position: "absolute" }}>
                    <h1>100+</h1><p>Clients</p>
                  </div>
                  <div style={{ borderLeft: "1px solid aqua",
                  height: "80px",
                  position: "absolute",
                  // left: "50%",
                  marginLeft: "9rem"}}>

                </div>
                <div style={{ marginLeft: 200 }}>
                  <p>Making us one of the leading technology services companies around the globe.</p></div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-4 mb-30">
                            <div className="about-content">
                                <p>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                                    praising pain was born and I will give you a complete acount of the system, and
                                    expound the actual teacings of the great explorer of the truth, titer-builder of
                                    human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                                    pleasure, but because those who do not know how to pursue pleasure rationally
                                    encounter
                                </p>
                                <div className="about-1-img">
                                    <Image src={aboutTwo} style={{ width: 'auto', height: 'auto' }} alt="about-img" />
                                </div>
                            </div>
                        </div> */}
        </div>
      </div>
    </div >
    </>
  );
};

export default Service;
