import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/product/home8_img.png";
import imgTwo from "../../../public/assets/img/product/businessman.jpg";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";
import { url } from "inspector";

const CloudSection = () => {
  return (
    <>
      <div className="mt-30"></div>
      <section className="blog-area pt-40 pb-80" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container">


          <div className="row " >
            <div className="col-lg-6" >

              <div className="mb-40">
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
                <div style={{ backgroundImage:"url('../assets/img/product/home8_img.png')", backgroundSize:"cover"}}  >
                {/* <div style={{background: url("public/assets/img/product/home8_img.png")}}  > */}

                  {/* <Image src={imgTwo} alt="" /> */}
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
