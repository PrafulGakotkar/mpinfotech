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

const ObjectiveSection = () => {
  return (
    <>
      <div className="mt-30 "></div>
      <section className="blog-area pt-10 pb-80 back-img"  >
        <div className="container">
          <div className="widget-title-box mb-30" style={{ textAlign: "center" }}>
            {/* <div>OUR</div> */}
            <h3 >Our Hybrid Cloud solutions</h3>
            <span className="animate-border" style={{ width: 65 }}></span>
            <div className="pl-105 pr-105">
              <p>
              The sprint to multiple cloud environments has created challenges
              </p>
            </div>
          </div>

          <div className="row pb-30 " >
            <div className="col-lg-6 pl-65  " /*style={{ paddingLeft: 65 }}*/>
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgOne} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    {/* <h5 style={{color:"#695ce8"}}>01</h5> */}
                    <h5 style={{color:"#695ce8"}}>Build a connected and secure hybrid cloud infrastructure</h5>
                  </div>
                  <p>Get industry-leading cloud infrastructure optimized and supported by next generation connectivity and security solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mar " >
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgTwo} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    {/* <h5 style={{color:"#f47514"}}>02</h5> */}
                    <h5 style={{color:"#f47514"}}>Enhance and optimize your cloud
</h5>
                  </div>
                  <p>Optimize, manage and secure your cloud assets, data and applications to achieve greater performance andcost savings.
</p>
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
                    {/* <h5 style={{color:"#ff4a69"}}>03</h5> */}
                    <h5 style={{color:"#ff4a69"}}>
Accelerate and de-risk your cloud adoption</h5>
                  </div>
                  <p>Secure the expertise and skills you need to migrate and modernise your application, data and infrastructure assets and estate.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mar " >
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgFour} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    {/* <h5 style={{color:"#38c77b"}}>04</h5> */}
                    <h5 style={{color:"#38x77b"}}>Transform and innovate your business with cloud</h5>
                  </div>
                  <p>Take advantage of innovative solutions to accelerate your digital transformation, achieve business outcomes and reduce the time to value.
</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row pb-30 pr-10 pl-65 " >

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

          </div> */}

        </div>
      </section>

    

    </>
  );
};

export default ObjectiveSection;
