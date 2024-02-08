import React from 'react';
import thumbOne from "../../../public/assets/img/about/img_box_01.png"
import thumbTwo from "../../../public/assets/img/about/img_box_02.png"
import thumbThree from "../../../public/assets/img/about/home6_icon_17.png"
import Image from 'next/image';
import Link from 'next/link';
const AboutArea = () => {
    return (
        <>
            <div className="about-area pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 mb-30 about-box">
                                {/* <div className="about-2-img">
                                </div> */}
                                 <div className="about-1-wrapper">
                                <Image className='about-box-img' src={thumbOne} alt="img-data" />
                                    <div className="about-text">
                                        
                                        {/* <span>Our Vision</span> */}
                                        <h1 style={{textAlign:"center"}}>Our Vision</h1>
                                        <p style={{textAlign:"center"}}>MPIT’s vision is to be the leader in Cyber Security & Cloud services through innovation, collaboration, and integrity.</p>
                                        
                                    </div>
                                    {/* <div className="about-button">
                                        <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30 about-box" style={{color:"#FFFCF6"}}>
                                {/* <div className="about-2-img">
                                </div> */}
                                 <div className="about-1-wrapper">
                                <Image className='about-box-img' src={thumbTwo} alt="img-data" />
                                    <div className="about-text">
                                        
                                        {/* <span>Our Vision</span> */}
                                        <h1 style={{textAlign:"center"}}>Our Mission</h1>
                                        <p style={{textAlign:"center"}}>Enable our customers by providing innovative solutions in the cloud and securing their data.</p>
                                        
                                    </div>
                                    {/* <div className="about-button">
                                        <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div> */}
                                </div>
                            </div>
                            
                        </div>

                        <div className="row mb-30 about-box-row">
                            {/* <div className="col-xl-6 col-lg-6 mb-30 about-box"> */}
                                {/* <div className="about-2-img">
                                </div> */}
                                 <div className="about-1-wrapper">
                                <Image className='about-box-img1' /*style={{marginLeft:"33rem", marginTop:"2rem"}}*/ src={thumbThree} alt="img-data" />
                                    <div className="about-text">
                                        
                                        {/* <span>Our Vision</span> */}
                                        <h1 style={{textAlign:"center"}}>Our Story</h1>
                                        <p style={{textAlign:"center"}}>We are a team of technologists with over 50 man years of industry experience in Information Security and Risk Management and have been in various leadership capabilities. We are bringing our Information Security and Cloud experience into the platform to help our customers.</p>

                                        <p style={{textAlign:"center"}}>MRADAR® is a multi-cloud security & governance management platform. It empowers our customers to define the controls for Governance and measure the compliance, assets, cloud operations, and cost management to get the best value out of their cloud infrastructure.</p>
                                        
                                    </div>
                                    {/* <div className="about-button">
                                        <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div> */}
                                </div>
                            </div>
                            
                          
                        </div>
                    {/* </div> */}
                </div>
        </>
    );
};

export default AboutArea;