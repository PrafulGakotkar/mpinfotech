import React from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/new/SATEESH-KUMAR-SEGU.c9b0ead8.jpg"
import IconFour from "../../../public/assets/img/new/MURTY-DOKKA.b987eca4.jpg"
import imgSeven from "../../../public/assets/img/service/home_img-01.png";
const UniqueMDM = () => {
  return (
    <>
      <section id="sec_unique_mdm" className="blog-area pt-40 pb-5 back-img" >
        <div className="container">

          <div className="row ">
            <div className="col-lg-6">

              <div className=" mb-5">
                <div className="about-me">
                  <Image style={{ height: "100%", width: "100%" }} src={imgSeven} alt="" />

                </div>
              </div>

            </div>
            <div className="col-lg-6 pt-60">

              <div className="mb-5">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  <h3 >Unique MDM
                    Implementation
                    expertise</h3>
                </div>

                <div className="about-me mb-30 ">
                  {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                  <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Real Time MDM implementation expertise
</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  MDM with Data quality integrated</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  AIML based Data Deduplication/record Linkage
</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Hybrid MDM style, integra table to any apps, data sources</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  We are preferred vendor for many industries famous MDM product implementation Vendor partner</p>
                </div>
              </div>

            </div>


          </div>



        </div>
      </section>
    </>
  );
};

export default UniqueMDM;
