import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/product/home12_cube3.png";
import imgTwo from "../../../public/assets/img/product/img_box_25.png";
import imgThree from "../../../public/assets/img/product/img_box_26.png";
import imgFour from "../../../public/assets/img/product/img_box_27.png";
import imgFive from "../../../public/assets/img/product/home6_icon6.png";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";
import { url } from "inspector";
import ProductAccordion from "./ProductAccordion";

const ObjectiveSection = () => {
  return (
    <>
      <div className="mt-30 "></div>
      <section className="blog-area pt-10 pb-80 back-img"  >
        <div className="container">
          <div className="widget-title-box mb-30" style={{ textAlign: "center" }}>
            <div>OUR</div>
            <h3 >Key objective for Cloud Security & Governance</h3>
            <span className="animate-border" style={{ width: 65 }}></span>
            <div className="pl-105 pr-105">
              <p>
                There are five Key Objectives to pursue in establishing a governance model for security in the cloud. MRADAR helps to choose the appropriate security standards and a governance framework based on the organization’s business targets, customer profile, and obligations for protecting data and other information assets in the cloud environment.
              </p>
            </div>
          </div>

          <div className="row pb-30 " >
            <div className="col-lg-6 pl-65 " /*style={{ paddingLeft: 65 }}*/>
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgOne} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    <h5 style={{color:"#695ce8"}}>01</h5>
                    <h5 style={{color:"#695ce8"}}>Strategy</h5>
                  </div>
                  <p>TOrganization(s) should mandate that security investments, services, and infrastructure in the cloud are executed to achieve established business goals (e.g., market competitiveness, financial, or operational performance).</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " >
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgTwo} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    <h5 style={{color:"#f47514"}}>02</h5>
                    <h5 style={{color:"#f47514"}}>value</h5>
                  </div>
                  <p>Organization(s) should define, mandate, operationalize, and maintain an appropriate security function with appropriate strategic and tactical representation, and holds responsibility to maximize the business value for the organization (Key Goal Indicators, ROI) from the pursuit of security initiatives in the cloud.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="row pb-30 " >
            <div className="col-lg-6 pl-65 " /*style={{ paddingLeft: 65 }}*/>
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgThree} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    <h5 style={{color:"#ff4a69"}}>03</h5>
                    <h5 style={{color:"#ff4a69"}}>Risk Mitigation & Measurement</h5>
                  </div>
                  <p>Security initiatives in the cloud should be subject to measurements that gauge control effectiveness in mitigating risk to the organization (Key Risk Indicators). These initiatives should also yield results that demonstrate a reduction in these risks over time</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " >
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgFour} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    <h5 style={{color:"#38c77b"}}>04</h5>
                    <h5 style={{color:"#38x77b"}}>Effective Use of Resources</h5>
                  </div>
                  <p>Organization(s) should define, mandate, operationalize, and maintain an appropriate security function with appropriate strategic and tactical representation, and holds responsibility to maximize the business value for the organization (Key Goal Indicators, ROI) from the pursuit of security initiatives in the cloud.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pb-30 pr-10 pl-65 " >

            <div className="objective-box" >
              <div className="widget-title-box mb-30" >
                <div >
                  <Image style={{ height: "100%", paddingRight: 15 }} src={imgFive} alt="" />
                </div>


              </div>
              <div className="mb-40 ">
                <div>
                  <h5 style={{color:"#fc7208"}}>05</h5>
                  <h5 style={{color:"#fc7208"}}>Performance</h5>
                </div>
                <p>Security initiatives in the cloud should be measurable in terms of performance, value and risk to the enterprise (Key Performance Indicators, Key Risk Indicators), and yield results that demonstrate attainment of desired targets (Key Goal Indicators) over time.</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="blog-area pt-10 pb-80 back-img"  >
        <div className="container">
          <div className="widget-title-box mb-30" style={{ textAlign: "center" }}>
           
            <h3 >Are You Ready to Secure & Govern Your Business?</h3>
            <span className="animate-border" style={{ width: 65 }}></span>
            <div className="obj-sec" /*style={{paddingLeft:250, paddingRight:250}}*/>
              <p>
              MRADAR Security & Governance platform can empower you to make informed decisions with respect to your cloud infrastructure.
              </p>
            </div>
          </div>

         


          

        </div>
      </section>



    </>
  );
};

export default ObjectiveSection;
