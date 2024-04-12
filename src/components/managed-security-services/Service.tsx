"use client"

import React, { useState } from "react";
import bgImg from "../../../public/assets/img/bg/bg-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { serviceDataTwo } from "@/data/service-data-two";
import IconOne from "../../../public/assets/img/icon/icon-01.png"
import IconTwo from "../../../public/assets/img/icon/icon-2.svg"
import IconThree from "../../../public/assets/img/icon/03.png"
import IconFour from "../../../public/assets/img/icon/icon-4.png"
import check_icon from "../../../public/assets/img/icon/icon-4.png"

import img1 from "../../../public/assets/img/new/aws_scope.c0740dc8.png"
import img2 from "../../../public/assets/img/new/aws_components.ac16c50d.png"
import img3 from "../../../public/assets/img/new/azure_scope.19c6cf9b.png"
import img4 from "../../../public/assets/img/new/azure_components.38592041.png"


const Service = () => {

  const [selectedProvider, setSelectedProvider] = useState('aws'); 
  return (
    <>
      <div
        className="services-area pt-120 pb-100"
        style={{ backgroundImage: `url(${bgImg.src})` }}      >
          <div className="container">
        <div className="tp-section tp-section-two mb-40">
                  <h4 className="tp-section-title text-center">Scope of Assessment</h4>
                </div>
        <div >
      <div className='d-flex justify-content-center pb-60'>
      <button className='tp-btn mr-30' onClick={() => setSelectedProvider('aws')}>AWS</button>
     
      <button className='tp-btn' onClick={() => setSelectedProvider('azure')}>Azure</button>
      </div>

      {/* Display AWS images if AWS button is selected */}
      {selectedProvider === 'aws' && (

        
        <div>
        
          <div className="row pt-25">
            <div className="col-lg-6">
              <div className="tp-about-two-wrap mb-10 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
              <p><b style={{fontSize:25}}>Some Services in Scope</b></p>
                <div className="tp-about-two-thumb">
                  <Image style={{transition: 'transform 0.3s ease'}} className='cyber-img' src={img1} alt="image-title" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-two-wrap mb-10 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
                <p><b style={{fontSize:25}}>Some Services in Scope</b></p>
                <div className="tp-about-two-thumb">
                  <Image style={{transition: 'transform 0.3s ease'}} className='cyber-img' src={img2} alt="image-title" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 pt-60">
              <div className="tp-about-two-wrapper mb-0 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section tp-section-two mb-0">
                  <h4 className="tp-section-title"> Sample Configuration Benchmarking</h4>
                  
                </div>
                <div className="tp-about-two-list">
                  <ul>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that MFA is enabled on root account </li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure S3 buckets are private</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure Network ACLs (NACLs) are configured properly</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure EC2 security groups have proper inb ound and outbound access</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure data is encrypted in transit and at rest</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure proper IAM policies are attached to groups or roles</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure encryption on EBS</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Log filters and alarms exist for critical items,.</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Review AWS Config outputs</li>
                  </ul>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      )}
      

      {/* Display Azure images if Azure button is selected */}
      {selectedProvider === 'azure' && (
        <div>
          
          <div className="row pt-25">
            <div className="col-lg-6">
              <div className="tp-about-two-wrap mb-10 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
              <p><b style={{fontSize:25}}>Some Services in Scope</b></p>
                <div className="tp-about-two-thumb">
                  <Image style={{transition: 'transform 0.3s ease'}} className='cyber-img' src={img3} alt="image-title" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-two-wrap mb-10 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">
              <p ><b style={{fontSize:25}}>Some Services in Scope</b></p>
                <div className="tp-about-two-thumb">
                  <Image style={{transition: 'transform 0.3s ease'}} className='cyber-img' src={img4} alt="image-title" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 pt-60">
              <div className="tp-about-two-wrapper  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section tp-section-two ">
                  <h4 className="tp-section-title"> Sample Configuration Benchmarking</h4>
                  
                </div>
                <div className="tp-about-two-list">
                  <ul>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that MFA is enabled on privileged users</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure there are no guest users</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that “Automatic provisioning of monitoring agent” is set to On</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure ASC Default policy setting “Monitor System Updates” is not disabled</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that “Secure transfer required” is set to “Enabled”</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that no databases allow ANY IP</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that “OS Disk” is encrypted</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure web app redirects all HTTP traffic to HTTPS in Azure App service</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that “Threat Detection Types” is set to “All”</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that logging for Azure KeyVault is enabled</li>
                      <li ><i className="fas fa-long-arrow-alt-right"></i>Ensure that audit profile captures all the activity</li>
                  </ul>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
        </div>
        {/* <div className="container">

          <div className="row">

            <h2 className="text-center pb-10">Our Approach</h2>

            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconOne} alt="" />
                </div>
                <div className="services-text">
                  <h3>Engange & Collaborate </h3>
                  <p> Engage during the application development lifecycle (preferably) of even after the application development. Collaborate with application and enterprise architects to design security.</p>
                  {/* <Link style={{marginTop:50}} href="/contact">
                      <span className="services-button">
                       Join Us Now{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                </div>
              </div>
            </div>

           
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconThree} alt="" />
                </div>
                <div className="services-text text-center">
                  <h3>Evaluate amd Implement</h3>
                  <p> Evaluate individual application components of and data flows to ensure security policies are met.</p>
                  <p>Develop and implement information security stategies during the application development lifecycle.</p>
                  {/* <Link style={{marginTop:50}} href="/cyber-information">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> 
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconFour} alt="" />
                </div>
                <div className="services-text text-center ">
                  <h3> Risk Assessment </h3>
                  <p> Identify threats and vulnerabilities that impact the applications some of which are not identified with typical VAPT. <br />
                    Access risks caused by the threats and the vulnerabilities observed.</p>
                  {/* <Link style={{marginTop:55}} href="/Technology-consulting">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> 
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div className="services-wrapper text-center">
                <div className="services-img">
                  <Image style={{ padding: 0 }} src={IconFour} alt="" />
                </div>
                <div className="services-text text-center ">
                  <h3> Controls Assessment</h3>
                  <p> Identify the controls in place and their effectiveness to mitigate the risk. <br />
                    Ensure the controls conform with organization’s security policy and NIST standards 800-37, 800-30, 800-39.<br />
                    Access risks caused by the threats and the vulnerabilities observed.</p>
                  {/* <Link style={{marginTop:55}} href="/Technology-consulting">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> 
                </div>
              </div>
            </div>

              <div  className="col-xl-12 col-lg-12 col-md-6 mb-30">
                <div className="services-wrapper text-center" style={{padding:0, borderRadius:'unset', backgroundColor:'unset'}}>
                  
                  <div className="services-text">
                    <Link href="/contact">
                      <span className="services-button">
                      Talk to a consultant{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div> 



          </div>

          
        </div> */}
      </div>

      {/* <div className="about-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="about-text" style={{margin:0 }}>
                <span>why choose us</span><br/>
                <h1>
                  WELCOME TO MPIT
                </h1>

                <p>
                  We have created a strategic partnership with leading technology companies and combined this partnership with our industry-experienced teams, best practices, and processes to help our clients to maximize the IT investment and time to market.
                </p>
                <Link href="/contact">
                  Contact Us <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="about-img">
                <div>
                  <div style={{ position: "absolute" }}>
                    <h1>20+</h1><p>Employees</p>
                  </div>
                  <div style={{ borderLeft: "1px solid aqua",
                  height: "80px",
                  position: "absolute",
                  // left: "50%",
                  marginLeft: "9rem"}}>

                </div>
                  <div style={{ marginLeft: 200 }}>
                    <p>Men and women, committed to better protect you around the world.</p></div>
                </div>
                <div style={{ marginTop: 50 }}>
                  <div style={{ position: "absolute" }}>
                    <h1>150+</h1><p>Projects</p>
                  </div>
                  <div style={{ borderLeft: "1px solid aqua",
                  height: "80px",
                  position: "absolute",
                  // left: "50%",
                  marginLeft: "9rem"}}>

                </div>
                  <div style={{ marginLeft: 200 }}>
                    <p>Where you will find the same quality of service and dedication around the world.</p></div>
                </div>
                <div style={{ marginTop: 50 }}>
                  <div style={{ position: "absolute" }}>
                    <h1>100+</h1><p>Clients</p>
                  </div>
                  <div style={{ borderLeft: "1px solid aqua",
                  height: "80px",
                  position: "absolute",
                  // left: "50%",
                  marginLeft: "9rem"}}>

                </div>
                <div style={{ marginLeft: 200 }}>
                  <p>Making us one of the leading technology services companies around the globe.</p></div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-4 mb-30">
                            <div className="about-content">
                                <p>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                                    praising pain was born and I will give you a complete acount of the system, and
                                    expound the actual teacings of the great explorer of the truth, titer-builder of
                                    human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                                    pleasure, but because those who do not know how to pursue pleasure rationally
                                    encounter
                                </p>
                                <div className="about-1-img">
                                    <Image src={aboutTwo} style={{ width: 'auto', height: 'auto' }} alt="about-img" />
                                </div>
                            </div>
                        </div> 
        </div>
      </div>
    </div > */}
    </>
  );
};

export default Service;
