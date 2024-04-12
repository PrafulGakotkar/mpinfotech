import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/call-center.webp";
import imgSeven from "../../../public/assets/img/new/cyber.c15d92b6.png";

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
                                        Value Proposition</h3>
                                    
                                </div>

                                <div className="about-me mb-30 ">
                                    {/* <p>Penetration testing is an authorized method to simulate an attack performed on a computer system to evaluate its security. Our industry-certified penetration testers use sophisticated tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system that could impact a business and its clients. This assessment would demonstrate whether a system is robust enough to withstand attacks from authenticated and unauthenticated positions, as well as a range of system roles. With the right scope defined, Pen testing can help an organization.</p> */}

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Report of Configuration Issues and Risks Observed</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Remediation Strategy</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Benchmarking Comparison Report</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Hardening Standards Report</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Risk Score</p>
                                </div>
                            </div>

                        </div>


                    </div>


                    {/*  <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me service-img" style={{ paddingLeft: 100, }}>
                                    <Image className="service-img" src={imgOne} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-10">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">

                                    <h2 >Our services:</h2>
                                    <span className="animate-border"></span>

                                </div>

                                <div className="about-me  ">
                                    <p>We develop software for products and mobile platforms for our customers and internal product development. <br />
                                        We at MPIT architect and engineer scalable and high-performing software solutions to meet the business challenges of our client. MPIT Software Development Services involves understanding our customer’s requirements, the design, software development, maintenance, implementation, support, testing, and documentation services and other services as may be required to create, enhance, improve, modify, update, or upgrade software applications as set forth in a Statement of Work.

                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="row pt-100 ">

                        <div className="col-lg-6 pt-10">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">

                                    <h2 >Product Development</h2>
                                    <span className="animate-border"></span>

                                </div>

                                <div className="about-me  ">
                                    <p>Software development is the collective processes involved in creating software programs, embodying all the stages throughout the systems development life cycle (SDLC).</p>
                                    <p>SDLC methodologies support the design of software to meet a business need, the development of software to meet the specified design and the deployment of software to production.  A methodology should also support maintenance, although that option may or may not be chosen, depending on the project in question.</p>
                                    <p>The Waterfall model, the original SDLC method, is linear and sequential, generally following these stages in order:</p>
                                    <ul>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Identification of required software </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Analysis of the software requirements </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Detailed specification of the software requirements </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Software design </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Programming </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Testing </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Maintenance </li>
                                        
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me service-img" >
                                    <Image className="service-img"  src={imgTwo} alt="" />

                                </div>
                            </div>

                        </div>


                    </div> */}



                </div>
            </section>



        </>
    );
};

export default ServicesSection;
