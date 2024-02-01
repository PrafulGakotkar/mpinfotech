import React from "react";
import bgImg from "../../../public/assets/img/shape/figure-image1.png"
import bgImg1 from "../../../public/assets/img/shape/figure_image2.png"
import Image from "next/image";
import Link from "next/link";
import Accordion from "./Accordion"

import { teamData } from "@/data/team-data";
const Team = () => {

  return (
    <>
      {/* <div className="team-area pt-120 pb-100 pos-rel"> */}
      <div className="team-area  pb-100 pos-rel">
        <div className="shape d-none d-xl-block">
          <div className="shape-item team-01 bounce-animate">
            {/* <Image src={bgImg} alt="" /> */}
          </div>
        </div>
        <div className="container">
          <div className="row mb-50">
            <div className="col-xl-4 col-lg-6">
              <div className="section-title  mb-30">

                <Image style={{ position: "absolute" }} src={bgImg} alt="" />
                <div style={{
                  position: "absolute",
                  marginTop: 230,
                  marginLeft: 200,
                  fontSize: 40,
                  color: "white"
                }}>We Can Help Secure<br /> Your Data</div>
                <div style={{
                  position: "absolute",
                  marginTop: "22rem",
                  marginLeft: 200,
                  color: "white"
                }}>Get In Touch With Our Team</div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-3 col-lg-6">
              <div className="team-section mb-30 z-index">
                <span className="b-sm-left-1"></span>
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">EXPERIENCE</span>
                <h1>Our Services</h1>
                <p>
                  MP Infotech Corp (MPIT) is fastest growing technology company enabling our clients to successfully migrate to the cloud with confidence and maximize the value, cyber security services, and software developed and delivered.
                </p>
                <div className="about-text " >
                  <Link href="/service-1">
                    Information / CyberSecurity
                  </Link><br />
                  <Link href="/service-1">
                    Cloud Transformation
                  </Link><br />
                  <Link href="/service-1">
                    Software Development
                  </Link><br />
                  <Link href="/service-1">
                    Technical consulting
                  </Link><br /> <br />
                </div><br />

                <Link className="btn" href="/contact">

                  <span className="btn-text">
                    join with us{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>

                </Link>
              </div>
            </div>
          </div>
          <div className="row mb-50 pt-120 pb-100">
            <div className="col-xl-6  col-lg-6">
              <div className="team-section mb-30 z-index" style={{height:"38rem"}}>

                <span className="" >Breakdown of Worldwide Public Cloud Services Spending Forecast (Millions of U.S. Dollars)</span>
                <h1>Spend by Services</h1><br/>

                <Accordion  />
                
                <Link className="btn" href="/contact">

                  <span className="btn-text">
                    join with us{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>

                </Link>
              </div>
            </div>
            <div className="col-xl-6  col-lg-6">
              <div className="section-title  mb-30">

                <Image style={{ position: "absolute" }} src={bgImg1} alt="" />
                <div style={{
                  position: "absolute",
                  marginTop: 230,
                  marginLeft: 200,
                  fontSize: 40,
                  color: "white"
                }}>Have a project in mind?<br /> Let’s get to work.</div>
                <div style={{
                  position: "absolute",
                  marginTop: "22rem",
                  marginLeft: 200,
                  color: "white"
                }}>Find out how it works and ask any <br />questions you may have.
                </div>
              </div>
            </div>

          </div>
          {/* <div className="row">
           {teamData.slice(0,4).map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mb-30">

                <Link href={`/team-details/${item.id}`} className="team-wrapper">
                  <div className="team-img">
                    <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="" />
                  </div>
                  <div className="team-text">
                    <h4> <Link href={`/team-details/${item.id}`}>{item.name}</Link> </h4>
                    <span> {item.title} </span>
                    <div className="team-icon">
                      <Link href="https://www.facebook.com/">
                        <i className={item.facebook}></i>
                      </Link>
                      <Link href="https://twitter.com/">
                        <i className={item.twitter}></i>
                      </Link>
                      <Link href="https://www.instagram.com/">
                        <i className={item.instagram}></i>
                      </Link>
                      <Link href="https://www.youtube.com/">
                        <i className={item.youtube}></i>
                      </Link>
                    </div>
                  </div>
                </Link>


              </div>
            ))}
        </div> */}
        </div>
      </div >
    </>
  );
};

export default Team;
