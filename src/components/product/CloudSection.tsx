import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/product/home8_img.png";
import imgTwo from "../../../public/assets/img/product/businessman.jpg";
import imgThree from "../../../public/assets/img/product/cloud-1.png";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";
import { url } from "inspector";
import ProductAccordion from "./ProductAccordion";

const CloudSection = () => {
  return (
    <>
      <div className="mt-30 "></div>
      <section className="blog-area pt-80 pb-80" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container">


          <div className="row  " >
            <div className="col-lg-6" >

              <div className="mb-40 pt-50">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 >Cloud operations management</h3>
                </div>

                <div className="about-me mb-30">
                  <p> The dashboard helps Cloud operations teams have a real-time view of activities and actionable alerts from multiple cloud providers. It enables the teams to mitigate them in a timely manner, thereby reducing the risk to the cloud infrastructure. Cloud operations will also have a view of the real-time asset dashboards.</p>
                </div>

                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 >Reporting</h3>
                </div>

                <div className="about-me">
                  <p> The dashboard helps Cloud operations teams have a real-time view of activities and actionable alerts from multiple cloud providers. It enables the teams to mitigate them in a timely manner, thereby reducing the risk to the cloud infrastructure. Cloud operations will also have a view of the real-time asset dashboards.

                  </p>
                </div>
              </div>

            </div>
            <div className="col-lg-6 pt-30">

              <div className=" mb-40">
                <div style={{ position: "relative" }}  >
                  {/* <div style={{background: url("public/assets/img/product/home8_img.png")}}  > */}

                  <Image style={{ borderRadius: "3% 15%", padding: 0 }} src={imgTwo} alt="" />
                  {/* <Image src={imgOne} alt="" /> */}

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className="blog-area pt-80 pb-80" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">


          <div className="row pt-60 " >
            <div className="col-lg-6" >

              <div className="mb-40 ">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 >Cloud Platforms</h3>
                </div>

                <div className="about-me mb-30">
                  <p> We integrate with AWS and Azure.<br/>
                    Our platform will integrate using MRADAR APIs into our customer’s cloud platform securely and provide the stakeholder with governance controls, reporting capabilities, the compliance status of their cloud infrastructure, cost management, risk metrics due to control violations, and identified configurations for remediation.

                  </p>
                </div>

                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  <ProductAccordion />
                </div>

                
              </div>

            </div>
            <div className="col-lg-6 pt-30">

              <div className=" mb-40">
                <div style={{ position: "relative" }}  >
                  {/* <div style={{background: url("public/assets/img/product/home8_img.png")}}  > */}

                  <Image style={{ width:"100%", height:"100%" }} src={imgThree} alt="" />
                  {/* <Image src={imgOne} alt="" /> */}

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSection;
