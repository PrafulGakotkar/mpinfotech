import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/new/secRisk_scope.a961f1ac.png";
import imgTwo from "../../../public/assets/img/new/seqRisk_scopeTopics.212572ea.png";

import Link from "next/link";


const MobileSection = () => {
    return (
        <>


            <section className="blog-area pt-100 pb-5 " style={{ backgroundColor: "#fff" }} >
                <div className="container">


                    <div className="row ">


                        <div className="widget-title-box mb-30 text-center">
                            {/* <span className="animate-border"></span> */}

                            <h2 >Scope of Assessment</h2>

                        </div>


                        <div className="col-lg-6 ">

                            <div className="mb-5 pl-160">


                                <div className="about-me  ">
                                    <p>We perform End-End Risk Assessment on</p>
                                    <Image className="service-img"/*style={{ height: "500px", width: "100%" }}*/ src={imgOne} alt="" />
                                    {/* <ul>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Custom iOS and Android apps development  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Native and cross-platform solutions  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Second platform app development  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> UI/UX design  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Consulting and prototyping  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Automated QA and testing  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Power management, notification and geofencing  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Embedded Android & AOSP customizations  </li>
                                        <li style={{ fontSize: 15 }}><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Maintenance and post-warranty support  </li>
                                    </ul> */}
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me service-img">
                                    <p>We cover various areas to understand the application architecture to assess the risk</p>
                                    <Image className="service-img"/*style={{ height: "500px", width: "100%" }}*/ src={imgTwo} alt="" />

                                </div>
                            </div>

                        </div>



                </div>



            </div>
        </section >



        </>
    );
};

export default MobileSection;
