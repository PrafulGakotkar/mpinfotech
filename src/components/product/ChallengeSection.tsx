import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/product/home8_img.png";
import imgTwo from "../../../public/assets/img/product/businessman.jpg";
import imgThree from "../../../public/assets/img/product/cloud-1.png";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";
import { url } from "inspector";
import ProductAccordion from "./ProductAccordion";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

const ChallengeSection = () => {
    return (
        <>
           
            <section className="blog-area pt-10 pb-80 back-img" >
                <div className="container">
                    <div className="widget-title-box mb-30" style={{textAlign:"center"}}>
                        <h3 >Challenges & Solutions</h3>
                        <span className="animate-border" style={{width:65}}></span>
                    </div>

                    <div className="row  " >
                        <div className="col-lg-6" >
                            <div className="widget-title-box mb-30">
                                {/* <span className="animate-border"></span> */}
                                <h5>Challenges:</h5>
                            </div>
                            <div className="mb-40 ">
                                <p>The rapid adoption of multi-cloud deployments and demand for massive economies of scale, processing speed, and agility might result in: An organization needs to define the standards and controls to adhere to governance.</p>
                                <ul>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Measuring the compliance of the multi-cloud infrastructure.</li>
                                    <li> <i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Lacking visibility into multi-cloud asset inventory.</li>
                                    <li > <i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Lacking real-time activity and alerting for violations or configuration errors to provide visibility to remediate.</li>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Lacking cost management to find the value of the service.</li>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Lacking visibility into cloud</li>
                                </ul>

                            </div>

                        </div>
                        <div className="col-lg-6" >
                            <div className="widget-title-box mb-30">
                                {/* <span className="animate-border"></span> */}
                                <h5>Solution:</h5>
                            </div>
                            <div className="mb-40 ">
                                <p>
                                    Multi-Cloud Security & Governance, Cost Management and operations on a unified dashboard</p>
                                <ul>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Define, govern and measure the compliance of our customer’s clouds in a unified way.</li>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Track the cloud resources, manage costs and detect security events, based on misconfigurations, threats and changes.</li>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Cost management of multi-cloud infrastructure, identifying value of service.</li>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Cloud-Ops dashboard helps promote action on risks and mitigate them in a timely manner.</li>
                                    <li><i className="fa-solid fa-circle fa-2xs" style={{color:"blue", paddingRight:6}}></i>Reporting capability provides the needed visibility to Senior management and other stake holders.</li>
                                </ul>

                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default ChallengeSection;
