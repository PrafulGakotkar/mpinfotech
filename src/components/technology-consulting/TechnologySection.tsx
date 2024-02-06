import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/CONSULTING.png";
import imgTwo from "../../../public/assets/img/service/outsourcing.jpg";




const TechnologySection = () => {
    return (
        <>
            <div className="mt-30 "></div>

            <section className="blog-area pt-40 " >
                <div className="container">


                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-40 pt-40">
                                <div className="about-me">
                                    <Image className="p2-img" src={imgOne} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-80">

                            <div className="mb-40 pr-40 ">

                                <h3>Technology consulting</h3><br />
                                <div className="about-me mb-30 ">
                                    <p> MPIT team of talented professionals helps our clients in IT Services in every sector within the tech universe and is backed by MPIT’s comprehensive expertise and best practices.</p><br />

                                    <div className="widget-title-box mb-30">

                                        <h6>Professional resourcing and project-based solutions</h6>
                                        <p>
                                            We have the deep industry knowledge to understand the challenges your business is facing and give you access to the professional talent and expertise you need on a project basis or time basis to seize new opportunity for your business.

                                        </p>

                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-area pt-10 pb-80 back-img"  >
                <div className="container">


                    <div className="row ">

                        <div className="col-lg-6 pt-80 pl-80">

                            <div className="mb-40 pr-110 ">

                                <h3>Outsourcing and Consulting</h3><br />
                                <div className="about-me mb-30 ">
                                    <p>MPIT’s team of talented professionals helps your organization to manage the ever-changing talent needs in today’s world of work, in which rapid access to the right talent is a compelling competitive advantage. With our thorough understanding of staffing trends and our pool of highly qualified technical resources, MPIT can identify and deliver the needed talent pool, matching the right individual to the right job. Let it be contingent or permanent recruitment.
                                    </p>

                                    
                                </div>

                            </div>


                        </div>

                        <div className="col-lg-6">

                            <div className=" mb-40 pt-40">
                                <div className="about-me">
                                    <Image style={{height:"100%", width:"100%"}} src={imgTwo} alt="" />

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>




        </>
    );
};

export default TechnologySection;
