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
// import ProductAccordion from "./ProductAccordion";

const Phase2Section = () => {
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
                  <h5>PHASE2</h5>
                  <h3 >Portfolio Discovery and Planning</h3>
                </div>

                <div className="about-me mb-30">
                  <p> Next, you need to understand your IT portfolio and the dependencies between applications and begin to consider what types of migration strategies you will need to employ to meet your business case objectives. With the portfolio discovery and migration approach, you are in a good position to build a full business case. If you need help with understanding your IT portfolio, you can work with Industry certified professionals.</p>
                </div>

                

                
              </div>

            </div>
            <div className="col-lg-6 pt-30">

              <div className=" mb-40">
                <div style={{ position: "relative" }}  >
                  {/* <div style={{background: url("public/assets/img/product/home8_img.png")}}  > */}

                  <Image className="p2-img" /*style={{ borderRadius: "3% 15%", padding: 0 }}*/ src={imgTwo} alt="" />
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

export default Phase2Section;
