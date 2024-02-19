import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/risks-in-mobile-application-development-industry.webp";

import Link from "next/link";


const MobileSection = () => {
    return (
        <>


            <section className="blog-area pt-100 pb-5 " style={{backgroundColor:"#f6f6f6"}} >
                <div className="container">


                    <div className="row ">
                        <div className="col-lg-6 pt-10">

                            <div className="mb-5 pl-160">
                                <div className="widget-title-box mb-30 ">
                                    {/* <span className="animate-border"></span> */}
                                   
                                    <h2 >Mobile development</h2>
                                    
                                </div>

                                <div className="about-me  ">
                                    <p>Our team of developers will lead the entire mobile app development process from ideation and concept to delivery and to ongoing support, whether it is a consumer-oriented app or a transformative enterprise-class solution.</p>
                                    
                                    <ul>  
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Custom iOS and Android apps development  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Native and cross-platform solutions  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Second platform app development  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> UI/UX design  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Consulting and prototyping  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Automated QA and testing  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Power management, notification and geofencing  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Embedded Android & AOSP customizations  </li>
                                        <li style={{fontSize:15}}><i className="fa fa-circle" style={{fontSize:"7px", color:"blue"}}></i> Maintenance and post-warranty support  </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me service-img">
                                    <Image className="service-img"/*style={{ height: "500px", width: "100%" }}*/ src={imgOne} alt="" />

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
