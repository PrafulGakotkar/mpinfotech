import Link from 'next/link';
import React from 'react';
import logoWhite from "../../../public/assets/img/logo/white.png"
import footerImg from "../../../public//assets/img/logo/logo.png";
import Image from 'next/image';
import SocilaLinks from '@/utils/SocilaLinks';
const FooterTwo = () => {
    return (
        <>
            <footer>
                <div className="footer-area pt-80" style={{ background: "url(assets/img/bg/bg-1.jpg)" }}>
                    <div className="container">
                        <div className="newsletter-bg pb-50 mb-80">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 mb-30">
                                    <div className="single-newsletter ">
                                        <div className="newsletter-form">
                                            <form action="#">
                                                <input placeholder="Enter Your Email :" type="email" />
                                                <button className="btn" type="submit"><span className="btn-text">subscribe <i className='fas fa-long-arrow-alt-right'></i></span> <span className="btn-border"></span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 mb-30">
                                    <div className="footer-2-icon text-lg-right">
                                        <SocilaLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <div className="footer-wrapper mb-30">
                                    <div className="footer-logo">
                                        <Link href="/">
                                            <Image src={footerImg} alt="flag" />
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>
                                            We have created a strategic partnership with leading technology companies and combined this partnership with our industry-experienced teams.
                                        </p>
                                    </div>
                                    <div className="footer-icon">
                                        <SocilaLinks />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4">
                                <div className="footer-wrapper mb-30">
                                    <h4 className="footer-title">Services</h4>
                                    <ul className="fotter-menu">
                                        <li>
                                            <Link href="/service-1">Our Offerings</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-1">Cloud Transformation</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-1">Software Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-1">Cyber/Information security</Link>
                                        </li>
                                        {/* <li>
                      <Link href="/service-1">Server Security</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Product Marketing</Link>
                    </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4">
                                <div className="footer-wrapper mb-30">
                                    <h4 className="footer-title"> Community</h4>
                                    <ul className="fotter-menu">
                                        <li>
                                            <Link href="/about">Home </Link>
                                        </li>
                                        <li>
                                            <Link href="/goals">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-1">IT Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">Our Products</Link>
                                        </li>
                                        <li>
                                            <Link href="/team">Careers</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper mb-30">
                                    <h4 className="footer-title">Quick Links</h4>
                                    <ul className="fotter-menu">
                                        <li>
                                            <Link href="/about">Our Product </Link>
                                        </li>
                                        <li>
                                            <Link href="/goals">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-1">Cyber/Information Security</Link>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6">
                                <div className="footer-wrapper mb-30">
                                    <h4 className="footer-title">Contact Us</h4>
                                    <div className="footer-info">
                                        {/* <p>But I must explain to you how all this mistaken</p> */}
                                    </div>
                                    <ul className="contact-link">
                                        <li>
                                            <div className="contact-address-icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="contact-address-text">
                                                <Link href="tel:+16098530432" target="_blank">
                                                    +1 609 853 0432
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-address-icon">
                                                <i className="fas fa-envelope-open"></i>
                                            </div>
                                            <div className="contact-address-text">
                                                <Link href="mailto:support@gmail.com" target="_blank">
                                                    info@mpinfotech.com
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-address-icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="contact-address-text">
                                                <Link href="">4365, US Route-1 South,
                                                    Suite 202, Princeton, NJ, 08540</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-area footer-2-bottom mt-50 pb-25 pt-25">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-8">
                                    <div className="copyright">
                                        <p><i className="far fa-copyright"></i> Copyright 2023 <Link href="#">MP Infotech Corp</Link>. All rights reserved.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="footer-bottem-text text-md-right">
                                        {/* <p>Design By <Li    nk href="#">BDevs</Link></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;