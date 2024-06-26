import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import aboutImg from '../../../public/assets/img/about/about.jpg';
import aboutTwo from '../../../public/assets/img/about/01.png';

const About = () => {
    return (
        <>
            <div className="about-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-text mt-80" >
                                <span style={{fontSize:21}}>WELCOME TO CYBER SPACE TECHNOLOGIES</span>
                                <h1>
                                    EXPLORE
                                    <span> INNOVATIONS  </span>HERE
                                </h1>
                                {/* <div>
                  <Typewriter
                    options={{
                      strings: [
                        'Cloud Transformation',
                        'Cloud Security',
                        'Software Development',
                        'Cyber Risk Management',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                    }}
                  />
                </div> */}
                                {/* <p>
                                    MP INFOTECH CORP (MPIT) is a leading professional IT service and solution company transforming clients’ businesses through various service offerings.
                                </p> */}
                                <p style={{fontSize:18}}>We at <b> Cyber Space Technologies</b> fully understand the necessity of
                                    data security and the significance of integrating and developing safe
                                    applications without compromising functionality or business objectives.</p>
                                {/* <Link href="/cyber-information">
                                    Our Services <i className="fas fa-long-arrow-alt-right"></i>
                                </Link> */}
                                {/* <Link style={{marginLeft:70}} href="/service-1">
                                    About Us <i className="fas fa-long-arrow-alt-right"></i>
                                </Link> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-img">
                                <Image src={aboutImg} style={{ width: '100%', height: 'auto' }} alt="about-img" />
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
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
