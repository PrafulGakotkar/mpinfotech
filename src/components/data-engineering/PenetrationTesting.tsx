"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/Cyber-Security-Instagram-Post-1536x1536.png";
import imgTwo from "../../../public/assets/img/service/blue-chek-icon.png";
import imgThree from "../../../public/assets/img/service/icon1.png";
import imgFour from "../../../public/assets/img/service/icon2.png";
import imgFive from "../../../public/assets/img/service/icon3.png";
import imgSix from "../../../public/assets/img/service/icon4.png";
import imgSeven from "../../../public/assets/img/service/SECURITY.png";
import imgEight from "../../../public/assets/img/service/softwra.jpg";
import imgNine from "../../../public/assets/img/service/Software code testing-amico.png";
import imgTen from "../../../public/assets/img/service/softwra.jpg";
import { casesData } from "@/data/case-data";
import CyberAccordion from "./CyberAccordion";

const PenetrationTesting = () => {


  return (
    <div id="sec_data_warehouse" className="gallery-area  pb-10">



      <section className="blog-area pt-40 pb-5 " >
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
                  <h3 >Data Warehouse
                    Modernization</h3>
                </div>

                <div className="about-me mb-30 ">
                  {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                  <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Real Time / Near Realtime data ingestion Lambda and Kappa Architecture (Batch, Micro Batch, Event, Stream patterns) ingestion</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Low Code/No Code Data Pipelines</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Real Time Monitoring with Alerting</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Cloud Scaling AWS, Azure, Google </p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  REST, Micro services ingestions and Micro Services (REST API) Egression (data as Service)</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  NDimensional data Modeling / Data Vault data modeling</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Cloud Migrations with Cost optimized Data Pipelines</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Agile DataOps Services expertise</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Strong expertise with modern cloud database infrastructure setup with Azure Synapse, Data bricks, Snowflake, Redshift.</p>
                </div>
              </div>

            </div>


          </div>

          {/* <div className="row ">

            <div className="col-lg-6 pt-60">

              <div className="mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 >Pen Testers use both Manual and Automated way of Testing</h3>
                </div>

                <div className="about-me mb-30 ">
                  <h6>Manual pen testing</h6>
                  <p>Manual pen testing is a key element to uncovering vulnerabilities and weaknesses and tests business logic that automated testing can overlook (e.g., data validation and integrity checks). A manual pen tester can also help identify false positives reported by automated testing. Because pen testers are experts who think like adversaries, they can analyze data to target their attacks and test systems and websites in ways automated testing solutions cannot.</p><br />

                  <h6>Automated testing</h6>
                  <p> Automated testing generates results faster and needs fewer specialized professionals than a fully manual pen testing process. Automated testing tools track results automatically and can sometimes export them to a centralized reporting platform.</p>
                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className=" ">
                <div className="about-me">
                  <Image style={{ height: "500px", width: "100%" }} src={imgEight} alt="" />

                </div>
              </div>

            </div>


          </div> */}

        </div>
      </section>

    </div>
  );
};

export default PenetrationTesting;
