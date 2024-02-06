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

            <h3 >Our Pen Testing Offers</h3>
            <span className="animate-border" style={{ width: 65 }}></span>
            
          </div>

          <div className="row pb-30 " >
            <div className="col-lg-6 cyber-box " >
              <div className="objective-box" >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgOne} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    <h5 style={{ color: "#695ce8" }}>01</h5>
                    <h5 style={{ color: "#695ce8" }}>Basics</h5>
                  </div>
                  <p>Includes automated scans and manual testing to identify high-risk vulnerabilities in web applications and web services. Focuses on exploratory risk analysis (e.g., anti-automation, complex authentication).</p>
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
                    <h5 style={{ color: "#f47514" }}>02</h5>
                    <h5 style={{ color: "#f47514" }}>Standard</h5>
                  </div>
                  <p>Essential Service plus business logic testing, which covers attacks outside a canned list or that may not have been considered otherwise (e.g., business logic data validation and integrity checks). Includes a manual review to identify false positives and a read-out call to explain findings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="services-text text-center">
                    <Link href="/contact">
                        <span className="services-button">
                            Our Products{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                    </Link>
                </div >
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
