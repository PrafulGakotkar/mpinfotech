import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/call-center.webp";
import imgSeven from "../../../public/assets/img/new/Strategy.e44a70ca.png";
import imgSev from "../../../public/assets/img/new/complaince.06824a1e.png";
import imgSe from "../../../public/assets/img/new/security-program.8e0b1d0d.png";
import img1 from "../../../public/assets/img/new/Engagement-Roadmap.f001137e.png";

import Link from "next/link";


const ServicesSection = () => {
    return (
        <>


            <section className="blog-area pt-100 pb-35 " >
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
                                    <h3 >
                                        Risk Management & Strategy</h3>

                                </div>

                                <div className="about-me mb-30 ">
                                    {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Gap Analysis</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  vCISO Services</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Risk Management</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Security Awareness & Training</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Security Strategy & Roadmap</p>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>


            <section className="blog-area pt-100 pb-35 " >
                <div className="container">

                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <p>Security Engineering & Implementation</p>
                                <div className="about-me">
                                    <Image style={{ height: "100%", width: "100%" }} src={imgSe} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <p>Compliance & Reporting

                                </p>
                                <div className="about-me">
                                    <Image style={{ height: "100%", width: "100%" }} src={imgSev} alt="" />

                                </div>
                            </div>

                        </div>



                    </div>



                </div>
            </section>

            <section className="blog-area pt-100 pb-35 " >
                <div className="container">

                    <div className="row ">
                        <Image style={{ height: "100%", width: "100%" }} src={img1} alt="" />


                    </div>



                </div>
            </section>



        </>
    );
};

export default ServicesSection;
