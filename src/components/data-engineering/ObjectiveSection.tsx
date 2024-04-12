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

            {/* <h3 >Our Pen Testing Offers</h3> */}
            {/* <span className="animate-border" style={{ width: 65 }}></span> */}

          </div>

          <div className="row pb-30 " >
            <div className="col-lg-4  " >
              <div className="objective-box" style={{ backgroundColor: "" }} >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgOne} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    {/* <h5 style={{ color: "#695ce8" }}>01</h5> */}
                    <h5 style={{ color: "#695ce8" }}>Data Warehouse Modernization</h5>
                  </div>
                  <p style={{color:"black"}}>At Data Warehouse Modernization, we specialize in helping organizations revolutionize their data infrastructure to meet the demands of the digital age. Our comprehensive suite of services and solutions empowers businesses to transform their data warehouses into agile, scalable, and cost-effective platforms that drive innovation and unlock the full potential of their data.
</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 " >
              <div className="objective-box" style={{ backgroundColor: "" }} >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgTwo} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    {/* <h5 style={{ color: "#f47514" }}>02</h5> */}
                    <h5 style={{ color: "#695ce8" }}>Data Governance & Data Observability platform setup services</h5>
                  </div>
                  <p style={{color:"black"}}>At Cyber Space Technologies,we understand the critical importance of data governance and observability in today's data-driven world. As businesses continue to rely on vast amounts of data for decision-making, ensuring the integrity, security, and accessibility of that data is paramount.
</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 " >
              <div className="objective-box" style={{ backgroundColor: "" }} >
                <div className="widget-title-box mb-30" >
                  <div >
                    <Image style={{ height: "100%", paddingRight: 15 }} src={imgTwo} alt="" />
                  </div>


                </div>
                <div className="mb-40 ">
                  <div>
                    {/* <h5 style={{ color: "#f47514" }}>02</h5> */}
                    <h5 style={{ color: "#695ce8" }}>Unique MDM Implementation expertise's</h5>
                  </div>
                  <p style={{color:"black"}}>At Cyber Space Technologies, we pride ourselves on offering unparalleled expertise in Master Data Management (MDM) implementation. With years of experience and a proven track record of successful projects, we stand as leaders in the field, delivering tailored solutions to meet the unique needs of each client.
</p>
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
