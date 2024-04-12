import React from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/new/SATEESH-KUMAR-SEGU.c9b0ead8.jpg"
import IconFour from "../../../public/assets/img/new/MURTY-DOKKA.b987eca4.jpg"
import imgSeven from "../../../public/assets/img/new/DBA Service.5558b023.jpg";
import img1 from "../../../public/assets/img/new/DBA-as-Service.98b3ad88.jpg";
import img2 from "../../../public/assets/img/new/micro services.b8327b00.jpg";
const LifeCycleSection = () => {
    return (
        <>
            <section className="blog-area pt-40 pb-5 back-img" >
                <div className="container">

                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me">
                                    <Image style={{ height: "100%", width: "100%" }} src={imgSeven} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-60">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    {/* <h6>Redesign Analytics with real time delivery and with AI</h6> */}
                                    <h3 >AWS/Azure/GCP Cloud
                                        Infra Admin Services
                                    </h3>
                                </div>

                                <div className="about-me mb-30 ">
                                    {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Cloud Admin services</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Cloud based Managed Databases /VM managed Databases services tuning and Administration</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  App modernizations</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  On-prem to Cloud databases migration</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Real Time Cloud Cost optimization (Cloud Ops) with maintaining scale and performance</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Customized tool set built for CloudOps monitoring</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  With cost optimized on-shore, off-shore models</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  24/7 Support with Sun support Model</p>
                                </div>
                            </div>
                            <div className="services-wrapper " style={{ padding: 0, background: 'unset' }}>

                                <div className="services-text">

                                    <Link style={{ marginTop: 50 }} href="/contact">
                                        <span className="services-button">
                                            Talk to a consultant{" "}
                                            <i className="fas fa-long-arrow-alt-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>

            <section className="blog-area pt-40 pb-5 back-img" >
                <div className="container">

                    <div className="row ">

                        <div className="col-lg-6 pt-60">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    {/* <h6>Accelerate Your data with Modern AI Automation with MLOPS Delivery</h6> */}
                                    <h3 >DBA as Service </h3>
                                </div>

                                <div className="about-me mb-30 ">
                                    {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Hadoop Admin (Cloudera, MapR, AWS EMR, Databricks) services’</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Low Cost MSSQL, Postgres, mySQL, Oracle, Snowflake, Greenplum Netezza, Open source Apache Druid , Pinot, Dorathy , Kafka, Pulsor Administration</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  SharePoint Migrations and Administration</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Middleware’s and Web Servers (WebLogic, Biztalk, WebSphere etc) Administration</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  penshift, kebernetis Support services</p>
                                    

                                </div>
                                <div className="services-wrapper " style={{ padding: 0, background: 'unset' }}>

                                    <div className="services-text">

                                        <Link style={{ marginTop: 50 }} href="/contact">
                                            <span className="services-button">
                                                Talk to a consultant{" "}
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me">
                                    <Image style={{ height: "100%", width: "100%" }} src={img1} alt="" />

                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>

           
        </>
    );
};

export default LifeCycleSection;
