import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/sdlc-2.jpg";
import imgTwo from "../../../public/assets/img/service/home9_icon1.png";
import imgThree from "../../../public/assets/img/service/home9_icon2.png";
import imgFour from "../../../public/assets/img/service/home9_icon3.png";

import Link from "next/link";


const LifeCycleSection = () => {
    return (
        <>


            <section className="blog-area pt-100 pb-5 " >
                <div className="container">


                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    {/* <h5>SOFTWARE DEVELOPMENT</h5> */}
                                    <h2 >Infrastructure Risk Assessment.</h2>
                                <p>CST provides a Holistic View of the Risk associated with your On-Premises Infrastructure using our Intelligent Risk Assessment and Scoring Approach</p>
                                </div>
                                <div className="about-me">
                                    <Image className="service-img"  src={imgOne} alt="" />

                                </div>
                                {/* <p><b>Testing:</b> Evaluating the quality of software with the aim of finding and fixing defects.</p> */}
                                {/* <p><b>Deployment:</b> The final software is released and checked for deployment issues, if any.</p> */}
                            </div>

                        </div>
                        <div className="col-lg-6 pt-10">

                            <div className="service-box " /*style={{ paddingRight: 170, marginBottom:15 }}*/>
                                <div className="about-me life-cycle-box ">
                                    <div style={{ paddingTop: 40, paddingLeft: 10 }}>
                                        <Image className="life-cycle-box-img" src={imgTwo} alt="" />
                                    </div>
                                    <div className="life-cycle-text">
                                        <h6>On-Prem Infra Security</h6>
                                        <p>Focuses on identifying vulnerabilities on organization’s on-prem and cloud network infrastructure and attempt to exploit them. This helps in identifying threats and plan to mitigate them before the bad actors act on them.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-box1 " /*style={{ paddingRight: 110, marginBottom:15, paddingLeft:60}}*/>
                                <div className="about-me life-cycle-box ">
                                    <div style={{ paddingTop: 40, paddingLeft: 10 }}>
                                        <Image className="life-cycle-box-img" src={imgThree} alt="" />
                                    </div>
                                    <div className="life-cycle-text">
                                        <h6>HackView LENS</h6>
                                        <p>External facing assets are most vulnerable, and we view and think from a hacker’s perspective to identify these vulnerabilities and risk associated.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-box " /*style={{paddingRight:170, marginBottom:15}}*/>
                                <div className="about-me life-cycle-box ">
                                    <div  style={{paddingTop:40, paddingLeft:10}}>
                                        <Image className="life-cycle-box-img" src={imgFour} alt="" />
                                    </div>
                                    <div className="life-cycle-text">
                                        <h6>Network VAPT</h6>
                                        <p>Focuses on identifying vulnerabilities on organization’s on-prem and cloud network infrastructure and attempt to exploit them. This helps in identifying threats and plan to mitigate them before the bad actors act on them.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-box " /*style={{paddingRight:170, marginBottom:15}}*/>
                                {/* <div className="about-me life-cycle-box ">
                                    <div className="life-cycle-text">
                                        <p><b>Maintenance:</b> According to the service level agreement, we ensure that needs continue to be met and that the system continues to perform as per the specification mentioned in the first phase.</p>
                                    </div>
                                </div> */}
                            </div>


                        </div>


                    </div>



                </div>
            </section>



        </>
    );
};

export default LifeCycleSection;
