import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/tabs_content-03-400x303.jpg";
import imgTwo from "../../../public/assets/img/service/SDLC_BWC.png";

import Link from "next/link";


const ServicesSection = () => {
    return (
        <>


            <section className="blog-area pt-100 pb-5 " >
                <div className="container">


                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me" style={{ paddingLeft: 100, paddingTop: 50 }}>
                                    <Image src={imgOne} alt="" />

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

                    <div className="row ">

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
                                        <li><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Identification of required software </li>
                                        <li><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Analysis of the software requirements </li>
                                        <li><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Detailed specification of the software requirements </li>
                                        <li><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Software design </li>
                                        <li><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Programming </li>
                                        <li><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Testing </li>
                                        <li><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Maintenance </li>
                                        
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me" style={{ height:"500px", width:"100%" ,}}>
                                    <Image  style={{ height:"500px", width:"100%" , }} src={imgTwo} alt="" />

                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>



        </>
    );
};

export default ServicesSection;
