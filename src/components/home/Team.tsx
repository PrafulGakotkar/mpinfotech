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
            <div className="col-xl-6 col-lg-6">
              <div className="section-title  mb-30">
                <div className="home-img"><Image className="home-img" src={bgImg} alt="" /></div>
                
                <div className="home-img-text" >We Can Help Secure<br /> Your Data</div>
                <div className="home-img-text-sub" >Get In Touch With Our Team</div>
              </div>
            </div>
            <div className="col-xl-6  col-lg-6">
              <div className=" mb-30 ">
                <span className="b-sm-left-1"></span>
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">EXPERIENCE</span>
                <h1>Our Services</h1>
                <p>
                  MP Infotech Corp (MPIT) is fastest growing technology company enabling our clients to successfully migrate to the cloud with confidence and maximize the value, cyber security services, and software developed and delivered.
                </p>
                <div className="about-text " >
                  <Link href="/cyber-information">
                    Information / CyberSecurity
                  </Link><br />
                  <Link href="/cloud-transformation">
                    Cloud Transformation
                  </Link><br />
                  <Link href="/software-development">
                    Software Development
                  </Link><br />
                  <Link href="/our-offering">
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
          <div className="row mb-50 pt-120 ">
          {/* <div className="row mb-50 pt-120 pb-100"> */}
            <div className="col-xl-6  col-lg-6">
              <div className="team-section mb-30 z-index" style={{ height: "38rem" }}>

                <span className="" >Breakdown of Worldwide Public Cloud Services Spending Forecast (Millions of U.S. Dollars)</span>
                <h1>Spend by Services</h1><br />

                <Accordion />

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

                <Image className="home-img"  src={bgImg1} alt="" />
                <div className="home-img-text" >Have a project in mind?<br /> Let’s get to work.</div>
                <div className="home-img-text-sub" >Find out how it works and ask any <br />questions you may have.
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div >
    </>
  );
};

export default Team;
