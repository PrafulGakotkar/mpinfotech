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
          <div className="widget-title-box pt-80 mb-30" style={{ textAlign: "center" }}>

            <h3 >Deep expertise Across the Hyperscale’s</h3>
            {/* <span className="animate-border" style={{ width: 65 }}></span> */}
            <p>Practical professional services that make businesses more agile, more quickly</p>

          </div>

          <div className="row pb-30 " >
            <div className="col-lg-6 pt-20">

              <div className="mb-5">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  <h3 >                   AWS Competencies</h3>

                </div>

                <div className="about-me mb-30 ">
                  {/* <p>Our Hybrid Cloud solutions are all fully integrated, secure and delivered with market leading expertise and consistent global customer experience.</p> */}

                  <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Data and analytics</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> DevOps </p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Education </p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Financial services</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Healthcare</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Industrial software</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  IoT</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Machine learning</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Microsoft workloads migration</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Oracle</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Retail</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  SaaS</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Storage</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Travel and hospitality</p>
                </div>
              </div>

            </div>


            <div className="col-lg-6 pt-20">

              <div className="mb-5">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  <h3 > Azure Competencies</h3>

                </div>

                <div className="about-me mb-30 ">
                  {/* <p>Our Hybrid Cloud solutions are all fully integrated, secure and delivered with market leading expertise and consistent global customer experience.</p> */}

                  <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Cloud platform</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Cloud productivity</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Data platform</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Messaging</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Small and mid market cloud Solutions</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Communications</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Application development</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Application integration</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Data centre</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Enterprise mobility management</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Data analytics</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  DevOps</p>
                </div>
              </div>

            </div>


          </div>
          {/* <div className="services-text text-center">
            <Link href="https://www.mradar360.com">
              <span className="services-button">
                Our Products{" "}
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div > */}
        </div>
      </section>

      {/* <section className="blog-area pt-10 pb-80 back-img"  >
        <div className="container">
          <div className="widget-title-box mb-30" style={{ textAlign: "center" }}>

            <h3 >Are You Ready to Secure & Govern Your Business?</h3>
            <span className="animate-border" style={{ width: 65 }}></span>
            <div style={{ paddingLeft: 250, paddingRight: 250 }}>
              <p>
                MRADAR Security & Governance platform can empower you to make informed decisions with respect to your cloud infrastructure.
              </p>
            </div>
          </div>






        </div>
      </section> */}



    </>
  );
};

export default ObjectiveSection;
