import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/call-center.webp";
import imgSeven from "../../../public/assets/img/new/cloud-computing.ba28319b.png";
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
                                    <Image style={{ height: "80%", width: "80%" }} src={imgSeven} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-60">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    <h3 >
                                    Our Hybrid Cloud solutions</h3>

                                </div>

                                <div className="about-me mb-30 ">
                                    <p>Our Hybrid Cloud solutions are all fully integrated, secure and delivered with market leading expertise and consistent global customer experience.</p>

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Build a secure hybrid cloud</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Enhance and optimize your cloud</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Simplify and de-risk cloud adoption</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Transform and innovate your business with cloud</p>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>


            {/* <section className="blog-area pt-100 pb-35 " >
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
            </section> */}

            {/* <section className="blog-area pt-100 pb-35 " >
                <div className="container">

                    <div className="row ">
                        <Image style={{ height: "100%", width: "100%" }} src={img1} alt="" />


                    </div>



                </div>
            </section> */}



        </>
    );
};

export default ServicesSection;
