import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/home_img-01.png";
import imgTwo from "../../../public/assets/img/service/Cy2-1.png";

import Link from "next/link";


const CloudSecuritySection = () => {
    return (
        <>


            <section className="blog-area pt-40 pb-5 back-img" >
                <div className="container">


                    <div className="row ">

                        <div className="col-lg-6 pt-60">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    <h5>SECURITY ADVISORY SERVICES:</h5>
                                    <h2 >IT Cloud security & <br /> Governance</h2>

                                </div>

                                <div className="about-me mb-30 ">
                                    <p> Cloud security governance refers to the management model that facilitates effective and efficient security management and operations in the cloud environment so that an enterprise’s business targets are achieved.</p>

                                    <p>he speed and scale at which resources can be deployed in the cloud makes it virtually impossible to enforce security governance in cloud computing manually. The key is to leverage automation tools like MRADAR360 that monitors compliance with the policies and industry best practices to prevent users from operating outside policy guardrails.</p>

                                    <p><i className="fa-solid fa-circle fa-2xs" style={{ color: "blue", paddingRight: 6 }}></i>Cloud security governance refers to the management model that facilitates effective and efficient security management and operations in the cloud environment so that an enterprise’s business targets are achieved.</p>


                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me">
                                    <Image style={{ height: "100%", width: "100%" }} src={imgOne} alt="" />

                                </div>
                                <p>The speed and scale at which resources can be deployed in the cloud makes it virtually impossible to enforce security governance in cloud computing manually. The key is to leverage automation tools like MRADAR360 that monitors compliance with the policies and industry best practices to prevent users from operating outside policy guardrails.</p>
                            </div>

                        </div>


                    </div>



                </div>
            </section>

            <section className="blog-area pt-100 pb-5 " >
                <div className="container">


                    <div className="row ">
                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me">
                                    <Image style={{ height: "500px", width: "100%" }} src={imgTwo} alt="" />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 pt-10">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    <h6>SECURITY ADVISORY SERVICES:</h6>
                                    <h2 >Cloud Security</h2>
                                    
                                </div>

                                <div className="about-me  ">
                                    <p> This practice helps your organization exploit the benefits of cloud services without compromising security. Our advisors prepare a cloud security strategy and roadmap aligned to your top business objectives. We then develop a cloud-security architecture and blueprint to integrate your security processes and technologies, addressing the interactions of users, applications and data across cloud services. To further secure your use of the cloud, take advantage of our newly expanded portfolio. It includes strategy, compliance, data and infrastructure protection, and security operations capabilities. Integrate with our partner solutions Alert logic, Symantec and Force point. MPIT has industry certified experts who can perform Information / Cyber Risk Management services.</p>
                                   
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>



        </>
    );
};

export default CloudSecuritySection;
