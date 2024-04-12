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
                        <div className="col-lg-6 pt-80">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    {/* <h5>OUR OFFERING</h5> */}
                                    <h2 >Cloud Infra Security</h2>
                                    {/* <h6>Want to perform information / cybersecurity assessment & risk management</h6> */}
                                    {/* <h5>, THIS IS WHAT YOU CAN EXPECT:</h5> */}
                                </div>

                                <div className="about-me  ">
                                    <h5>CLOUD CONFIGURATION REVIEW</h5>
                                   <p>  Cloud services configuration reviews on AWS and Azure.</p>
                                    <h5>STANDARDS BENCHMARKING</h5>
                                   <p>  Benchmarking against organization configuration standards and/or industry frameworks such CIS Controls and AWS Well Architected Framework</p>
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
