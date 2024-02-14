import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/Uploading-rafiki.png";

import Link from "next/link";


const OfferingSection = () => {
    return (
        <>
            

            <section className="blog-area pt-100 pb-5 " >
                <div className="container">


                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me">
                                    <Image style={{ height: "500px", width: "100%" }} src={imgOne} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-10">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    <h5>OUR OFFERING</h5>
                                    <h2 >IT Cloud security & Governance</h2>
                                    <h6>Want to perform information / cybersecurity assessment & risk management</h6>
                                    <h5>, THIS IS WHAT YOU CAN EXPECT:</h5>
                                </div>

                                <div className="about-me  ">
                                   <p> <span className="dot"></span> Share your contact us here; one of our team members will reach out to you and understand the scope.</p>
                                    <p><span className="dot"></span>  We will work out a schedule that works for everyone involved; to go over the scope, timelines, and estimated price.</p>
                                    <p><span className="dot"></span>  Rules of engagement will be set that meet the goals that are agreed. As work is being conducted, we will be sure to keep you informed every step of the way.</p>

                                    <p><span className="dot"></span>  A report will be created that informs you as to what was discovered and what we suggest to correct any issues.</p>

                                    <p><span className="dot"></span>  We will work with you to make sure you understand the results and have the knowledge needed to take any actions that you may need to take.</p>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>



        </>
    );
};

export default OfferingSection;
