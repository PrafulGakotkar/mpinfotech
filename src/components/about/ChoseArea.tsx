import AboutFaq from '@/sheardComponent/AboutFaq';
import React from 'react';
import AboutVideo from './AboutVideo';
import thumb from "../../../public/assets/img/about/about.png"
import Image from 'next/image';


const ChoseArea = () => {
    return (
        <>
             <div className="choose-area pt-130 pb-130" style={{ background: "url(assets/img/bg/bg-15.jpg)" }}>
                    <div className="choose-bg">
                        <div className="container">
                            <div className="row px-5">
                            <div className="section-title mb-45">
                                            {/* <span className="b-sm-left-1"></span>
                                            <span className="b-sm-left-2"></span> */}
                                            <span className="">About Us</span>
                                            <h1>Welcome to MP Infotech</h1>
                                        </div>
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="faq-wrapper">
                                        
                                        <div className="faq-box faq-2-box">
                                        <Image style={{height:"300px", width:'100%', paddingLeft:0, paddingRight:12, marginTop:15}} src={thumb} alt="img-data" />
                                            {/* <AboutFaq/> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <AboutVideo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ChoseArea;