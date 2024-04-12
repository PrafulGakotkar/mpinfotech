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

            <h3 >Our Hybrid Cloud solutions</h3>
            {/* <span className="animate-border" style={{ width: 65 }}></span> */}
            {/* <p>CST provides a Holistic View of the Risk associated within your Applications using our Intelligent Risk Assessment and Scoring Approach.</p> */}

          </div>

          <div className="row pb-30 " >
            <div className="col-lg-6 pt-20">

              <div className="mb-5">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  {/* <h3 >                    Our Hybrid Cloud solutions</h3> */}

                </div>

                <div className="about-me mb-30 ">
                  {/* <p>Our Hybrid Cloud solutions are all fully integrated, secure and delivered with market leading expertise and consistent global customer experience.</p> */}

                  <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Elastic Engineering Plus : Flexible on-demand engineering resource.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Migration Services : Move assets, services, application and databases across cloud technologies.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Cloud Architecture and Consulting : Expert consultation for multi-cloud/ hybrid design.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Application Modernization and Testing : Modernize your existing applications, build new ones and run them anywhere.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Cloud DevOps : Philosophies, practices and tools that increases applications and services delivery.</p>
                </div>
              </div>

            </div>


            <div className="col-lg-6 pt-20">

              <div className="mb-5">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span> */}
                  {/* <h3 >                    Our Hybrid Cloud solutions</h3> */}

                </div>

                <div className="about-me mb-30 ">
                  {/* <p>Our Hybrid Cloud solutions are all fully integrated, secure and delivered with market leading expertise and consistent global customer experience.</p> */}

                  <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Cost effective self-sustaining, dedicated and fully functional cloud specific team support.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Reduce total cost of ownership (TCO), speed up delivery, and create opportunities for innovation.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Build architectures and ecosystems that can scale with your business, including legacy workloads.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Reduce resources required to run an application, increase frequency and reliability of deployments, and improve uptime and resiliency.</p>
                  <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Development and operations team are brought together work across the entire application lifecycle.</p>
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
