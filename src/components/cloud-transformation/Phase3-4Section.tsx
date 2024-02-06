"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/home7_img_01.png";
import imgTwo from "../../../public/assets/img/service/blue-chek-icon.png";
import imgThree from "../../../public/assets/img/service/person-icon.png";
import imgFour from "../../../public/assets/img/service/smartphone-icon.png";
import imgFive from "../../../public/assets/img/service/cloud-icon.png";
import imgSix from "../../../public/assets/img/service/transfer-icon.png";
import imgSeven from "../../../public/assets/img/service/migrTE.jpg";
import imgEight from "../../../public/assets/img/service/softwra.jpg";
import imgNine from "../../../public/assets/img/service/Minimal-Padlock-Cyber-Security-Logo-1024x1024.png";
import imgTen from "../../../public/assets/img/service/softwra.jpg";
import { casesData } from "@/data/case-data";
import CloudAccordion from "./CloudAccordion";
// import CyberAccordion from "./CyberAccordion";

const Phase34Section = () => {


    return (
        <div className="gallery-area  pb-10">

            <section className="blog-area pt-40 pb-20 back-img-service" >
                <div className="container">


                    <div className="row ">

                        <div className="col-lg-6 pt-60">

                            <div className="mb-40 pt-50">
                                <div className="widget-title-box  mb-30">
                                    <span className="animate-border"></span>
                                    <h5>PHASE 3 & PHASE 4:</h5>
                                    <h3 >Designing, Migrating, and Validating Application:</h3>
                                </div>

                                <div className="about-me mb-30">
                                    <p> Here the focus moves from the portfolio level to the individual application level and you design, migrate, and validate each application. Each application is designed, migrated, and validated according to one of the six common application strategies. Once you have some foundational experience from migrating a few apps and a plan in place that the organization can get behind – it’s time to accelerate the migration and achieve scale.
                                    </p>


                                </div>

                                <div>
                                    <h3>Our Cybersecurity services</h3>
                                </div>

                                <CloudAccordion />



                            </div>

                        </div>

                        <div className="col-lg-6 pb-30 pl-20 pt-100">

                            <div className=" mb-40">
                                <div className="about-me cloud-img cloud-box " >
                                    <div className="col-lg-3 image-box ml-30 mb-30" >
                                        <div className="pt-30">
                                            <Image style={{ height: 100, width: 120 }} src={imgThree} alt="" />
                                            <div style={{ paddingLeft: 50, paddingBottom: 50, paddingRight: 30 }}>
                                                <h5>
                                                    Refactor / Re-architect</h5>
                                                <p>Typically, this is driven by a strong business need to add features, scale, or performance that would otherwise be difficult to achieve in the application’s existing environment.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 image-box ml-30 " >
                                        <div className="pt-30">
                                            <Image style={{ height: 100, width: 120 }} src={imgFour} alt="" />
                                            <div style={{ paddingLeft: 50, paddingBottom: 50, paddingRight: 30 }}>
                                                <h5>
                                                Retire</h5>
                                                <p>Identifying IT assets that are no longer useful and can be turned off will help boost your business case and direct your attention towards maintaining the resources that are widely used.</p>
                                            </div>
                                        </div>
                                    </div>
                                    


                                </div>

                                <div className="about-me cloud-img cloud-box pt-30 mb-30 " >
                                    <div className="col-lg-3 image-box ml-30 mb-30" >
                                        <div className="pt-30">
                                            <Image style={{ height: 100, width: 120 }} src={imgFive} alt="" />
                                            <div style={{ paddingLeft: 50, paddingBottom: 50, paddingRight: 30 }}>
                                                <h5>
                                                    Retain</h5>
                                                <p>Identifying IT assets that are no longer useful and can be turned off will help boost your business case and direct your attention towards maintaining the resources that are widely used.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 image-box ml-30 mb-30" >
                                        <div className="pt-30">
                                            <Image style={{ height: 100, width: 120 }} src={imgSix} alt="" />
                                            <div style={{ paddingLeft: 50, paddingBottom: 50, paddingRight: 30 }}>
                                                <h5>
                                                Phase 5: Operate</h5>
                                                <p>As applications are migrated, you iterate on your new foundation, turn off old systems, and constantly iterate toward a modern operating model.</p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>

            <section className="blog-area pt-40 pb-5 " >
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
                                    <span className="animate-border"></span>
                                    <h6>PHASE 5</h6>
                                    <h3 >Operate:</h3>
                                </div>

                                <div className="about-me mb-30 ">
                                    <p>As applications are migrated, you iterate on your new foundation, turn off old systems, and constantly iterate toward a modern operating model. Your operating model becomes an evergreen set of people, process, and technology that constantly improves as you migrate more applications. We use products like MRADAR Suite, AppDynamics, NewRelic, and Dynatrace that can help you continue to iterate on your operating model as you move more to the cloud.
                                    </p>

                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>

        </div>
    );
};

export default Phase34Section;
