import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/new/secRisk_scope.a961f1ac.png";
import imgSeven from "../../../public/assets/img/new/compliance2.62dffb59.png";

import Link from "next/link";


const MobileSection = () => {
    return (
        <>


<section className="blog-area pt-100 pb-35 " >
                <div className="container">

                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me">
                                    <Image style={{ height: "80%", width: "70%" }} src={imgSeven} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-60">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    <h3 >
                                    Our Compliance</h3>

                                </div>

                                <div className="about-me mb-30 ">
                                    <p>COMPLIANCE FRAMEWORKS THAT WE FOLLOW & SUPPORT</p>

                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> ISO 27001 (International Standards Organization)</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  PCI DSS (Payment Card Industry Data Security Standard)
</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  SOC2 TYPE 1</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  SOC2 TYPE 2</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  HIPAA</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  GDPR</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  NIST (National Institute of Standards and Technology)</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  CIS (Centre for Internet Security)</p>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>



        </>
    );
};

export default MobileSection;
