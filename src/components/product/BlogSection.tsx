import React from "react";
import ArticleLayout from "./ArticleLayout";
import imgTwo from "../../../public/assets/img/bg/Data_security_05.jpg";
import imgOne from "../../../public/assets/img/product/Logo_transparent.webp";
// import imgTwo from "../../../public/assets/img/product/Integrate-Security-into-DevOps.png";
import Image from "next/image";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";

const BlogSection = () => {
  return (
    <>
      <section className="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">


            <div className="col-lg-8">

              <div className=" mb-40">
                <div className="widget-title-box mb-30">
                  {/* <span className="animate-border"></span><br /> */}
                  <Image
                    className=""
                    style={{
                      padding: 0, margin: 0, height: 50,
                      color: "transparent",
                      width: 100,
                      backgroundColor: "#67a7a7",
                      boxShadow: "0px 0px 5px 5px lightblue",
                      borderRadius: 8
                    }}
                    src={imgOne}
                    alt="blog image"
                  />
                  <h3 >MRADAR ® a multi-cloud Security & Governance Platform</h3> {/*className="widget-title"*/}
                </div>
                {/* <div className="about-me text-center"> */}
                <div className="about-me">
                  {/* <Image src={imgOne} alt="" /> */}
                  {/* <h4>Zulia Maron Duo</h4> */}
                  <p> MRADAR ® is a multi-cloud Security & Governance platform that integrates with our customer’s multiple cloud providers to provide a view into Security, Governance, Cost management, and Reporting.
                  </p>
                  <p>MRADAR ® is a registered trademark of MP Infotech Corp</p>
                  <p>Cloud Security & Governance is the complimentary activity of organizing, coordinating, and steering the corporate resources and actions in full compliance with defined governance policies while ensuring the achievement of strategic and operational objectives.</p>

                  <h5 style={{ color: "red" }}>Are You Ready to Secure & Govern Your Business?</h5>
                  <p>MRADAR Security & Governance platform can empower you to make informed decisions with respect to your cloud infrastructure.</p>
                  {/* <div className="widget-social-icon">
                    <SocilaLinks />
                  </div> */}
                  <div className="read-more mt-30 btn">
                    <Link href={`https://www.mradar360.com`}>
                      <span className="btn-text">
                        Get Started <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Popular Feeds</h3>
                </div>
                <ul className="recent-posts">
                  {blogData.map((item) => (
                    <li key={item.id}>
                      <div className="widget-posts-image">
                        <Link href={`/blog-details/${item.id}`}>
                          <Image src={item.img} alt="" />
                        </Link>
                      </div>
                      <div className="widget-posts-body">
                        <h6 className="widget-posts-title">
                          <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                        </h6>
                        <div className="widget-posts-meta">
                          October 18, 2018{" "}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Categories</h3>
                </div>
                <ul className="cat">
                  <li>
                    <Link href="/blog">
                      Lifestyle <span className="f-right">78</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Travel <span className="f-right">42</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Fashion <span className="f-right">32</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Music <span className="f-right">85</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      Branding <span className="f-right">05</span>
                    </Link>
                  </li>
                </ul>
              </div> */}
              {/* <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Social Profile</h3>
                </div>
                <div className="social-profile">
                  <SocilaLinks />
                </div>
              </div> */}
              {/* <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Instagram Feeds</h3>
                </div>
                <ul id="Instafeed"></ul>
              </div> */}
              {/* <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Instagram Feeds</h3>
                </div>
                <div className="tag">
                  <Link href="/blog">Popular</Link>
                  <Link href="/blog">desgin</Link>
                  <Link href="/blog">usability</Link>
                  <Link href="/blog">develop</Link>
                  <Link href="/blog">consult</Link>
                  <Link href="/blog">icon</Link>
                  <Link href="/blog">HTML</Link>
                  <Link href="/blog">ux</Link>
                  <Link href="/blog">business</Link>
                  <Link href="/blog">kit</Link>
                  <Link href="/blog">keyboard</Link>
                  <Link href="/blog">tech</Link>
                </div>
              </div> */}
              {/* <div className="widget mb-40 p-0 b-0">
                <div className="banner-widget">
                  <Link href="">
                    <Image src={thumbOne} alt="" />
                  </Link>
                </div>
              </div> */}
            </div>

            <div className="col-lg-4">
              {/* <ArticleLayout /> */}
              <div>
                <Image
                  className="product-img"
                  /*style={{ width: "100%", height: "530px", paddingTop: 50 }}*/
                  src={imgTwo}
                  alt="blog image"
                />
              </div>
            </div>
          </div>

          {/* <div className="row pt-40">
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

          </div> */}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
