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
                                    <h5>SOFTWARE DEVELOPMENT</h5>
                                    <h2 >Software Development Lifecycle</h2>
                                </div>
                                <div className="about-me">
                                    <Image style={{ height: "450px", width: "450px" }} src={imgOne} alt="" />

                                </div>
                                <p><b>Building:</b> Developers start to build the entire system by writing code using the chosen programming language, techniques, and methodologies.</p>
                                <p><b>Testing:</b> Evaluating the quality of software with the aim of finding and fixing defects.</p>
                                <p><b>Deployment:</b> The final software is released and checked for deployment issues, if any.</p>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-10">

                            <div className=" " style={{ paddingRight: 170, marginBottom:15 }}>
                                <div className="about-me life-cycle-box ">
                                    <div style={{ paddingTop: 40, paddingLeft: 10 }}>
                                        <Image className="life-cycle-box-img" src={imgTwo} alt="" />
                                    </div>
                                    <div className="life-cycle-text">
                                        <h6>PLANNING</h6>
                                        <p>We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" " style={{ paddingRight: 110, marginBottom:15, paddingLeft:60}}>
                                <div className="about-me life-cycle-box ">
                                    <div style={{ paddingTop: 40, paddingLeft: 10 }}>
                                        <Image className="life-cycle-box-img" src={imgThree} alt="" />
                                    </div>
                                    <div className="life-cycle-text">
                                        <h6>DESIGNING</h6>
                                        <p>The system and documents are prepared as per the requirement specifications. This helps us define overall system architecture and technology stack.

</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" " style={{paddingRight:170, marginBottom:15}}>
                                <div className="about-me life-cycle-box ">
                                    <div  style={{paddingTop:40, paddingLeft:10}}>
                                        <Image className="life-cycle-box-img" src={imgFour} alt="" />
                                    </div>
                                    <div className="life-cycle-text">
                                        <h6>DEFINING</h6>
                                        <p>Once the requirement analysis phase is completed, the next step is to define and document software needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" " style={{paddingRight:170, marginBottom:15}}>
                                <div className="about-me life-cycle-box ">
                                    <div className="life-cycle-text">
                                        <p><b>Maintenance:</b> According to the service level agreement, we ensure that needs continue to be met and that the system continues to perform as per the specification mentioned in the first phase.</p>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>



                </div>
            </section>



        </>
    );
};

export default LifeCycleSection;
