import React from "react";
import ArticleLayout from "./ArticleLayout";
import imgOne from "../../../public/assets/img/product/Data-Protection.png";
import Image from "next/image";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";

const SecuritySection = () => {
  return (
    <>
      <section className="blog-area pt-40 pb-80" style={{backgroundColor:"#f2f2f2"}}>
        <div className="container">
        

          <div className="row ">
            <div className="col-lg-6">

              <div className="mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 >Security & Governance</h3>
                </div>

                <div className="about-me mb-30">
                  <p> Define, Govern and measure the compliance of our customer’s clouds in a unified way. Cloud governance is a framework that guides how end users make use of cloud services by defining and creating policies to control costs, minimize security risks, improve efficiency, and accelerate deployment.
                  </p>
                </div>

                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 >Cost Management</h3>
                </div>

                <div className="about-me">
                  <p> The need to focus on the efficient use of cloud services brings financial benefits; with a tool like MRADAR, most organizations are likely to spend their money wisely. Maximizing the value of the cloud requires a tight collaboration among the disciplines of governance, architecture, operations, product management, finance, and application development. Correlating cloud costs to business KPIs allows organizations to manage spending with respect to its return on investment (ROI).
                  </p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">

              <div className=" mb-40">
                <div className="about-me">
                  <Image src={imgOne} alt="" />

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SecuritySection;
