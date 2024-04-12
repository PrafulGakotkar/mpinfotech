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
            <div className="col-xl-12 col-lg-12 ">
              <div className="section-title text-center  mb-80">
                {/* <span className="border-left-1"></span> */}
                <span>what we do</span>
                {/* <span className="border-right-1"></span> */}
                <h2>
                  We build <span style={{color:'#2AAFE0'}}>Digital Ecosystems</span> by providing Integration Solutions using <br/> <span style={{color:'#2AAFE0'}}> modern API-Led connectivity </span> approach and latest<br/>
                  <span style={{color:'#2AAFE0'}}>Cloud Integration tools.</span>
                  Our ultimate goal is to make disparate systems accessible so<br/>
                  data can be easily available to the <span style={{color:'#2AAFE0'}}>Stakeholders in Real-time.</span>

                </h2>
                {/* <h6>Expertly moving business services across technologies, minimizing risk, disruption and downtime</h6> */}
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
};

export default AboutService;
