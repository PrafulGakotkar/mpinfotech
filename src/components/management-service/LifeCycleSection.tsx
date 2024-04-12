import React from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/new/SATEESH-KUMAR-SEGU.c9b0ead8.jpg"
import IconFour from "../../../public/assets/img/new/MURTY-DOKKA.b987eca4.jpg"
import imgSeven from "../../../public/assets/img/new/Enterprise Architecture.49d923d6.jpg";
import img1 from "../../../public/assets/img/new/project management.11eeccca.jpg";
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
                                    <h3 >Enterprise Architecture
And Consulting Services
                                    </h3>
                                </div>

                                <div className="about-me mb-30 ">
                                    {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Modern Dynamic Enterprise Architecture Services</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  CTO as service</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  App Innovations and Ideology with revenue streams creation</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Cloud Migrations Strategy</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Modern Data Architecture Planning and migrations</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Databases tuning Services</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Staff Augmentation (Talent Pool onboarding, Training)</p>
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
                                    <h3 >Product Management /
Project Management
as Service</h3>
                                </div>

                                <div className="about-me mb-30 ">
                                    {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Agile Product Management Service Delivery</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Certified professionals</p>
                                    

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
