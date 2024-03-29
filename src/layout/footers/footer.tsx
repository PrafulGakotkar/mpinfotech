import Link from "next/link";
import React from "react";
import footerImg from "../../../public//assets/img/logo/logo.png";
import imgOne from "../../../public/assets/img/footer/01.jpg";
import imgTow from "../../../public/assets/img/footer/02.jpg";
import Image from "next/image";
import FooterBottom from "./FooterBottom";
import SocilaLinks from "@/utils/SocilaLinks";
import HeaderOne from "../headers/HeaderOne";
import MobileMenu from "../headers/MobileMenu";

const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-area grey-bg pt-80 pb-30">
          <div className="container">
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
                      <Link href="/our-offering">Our Offerings</Link>
                    </li>
                    {/* <li>
                      <Link href="/cloud-transformation">Cloud Transformation</Link>
                    </li> */}
                    <li>
                      <Link href="/software-development">Software Development</Link>
                    </li>
                    <li>
                      <Link href="/cyber-information">Cyber/Information security</Link>
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
                      <Link href="/">Home </Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      {/* <Link href="/service-1">IT Services</Link> */}
                      <div className="dropdown">
                        <button className="dropbtn">It Services</button>
                        <div className="dropdown-content">
                          <Link href="cyber-information">Cyber / Information Security</Link>
                          <Link href="software-development">Software Development</Link>
                          {/* <Link href="cloud-transformation">Cloud Transformation</Link> */}
                          <Link href="Technology-consulting">Technology Consulting</Link>
                        </div>
                      </div>
                      
                    </li>
                    <li>
                      <Link href="/product">Our Products</Link>
                    </li>
                    <li>
                      <Link href="/careers">Careers</Link>
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
                      <Link href="/product">Our Product </Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/cyber-information">Cyber/Information Security</Link>
                    </li>

                  </ul>
                  {/* <div className="footer-news">
                    <ul>
                      <li>
                        <div className="footer-news-img">
                          <Link href="/blog">
                            <Image src={imgOne} alt="" />
                          </Link>
                        </div>
                        <div className="footer-news-text">
                          <h5>
                            <Link href="/blog">
                              Building Real Time Charts With Grap HQL & Postgres
                            </Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="footer-news-img">
                          <Link href="/blog">
                            <Image src={imgTow} alt="" />
                          </Link>
                        </div>
                        <div className="footer-news-text">
                          <h5>
                            <Link href="/blog">
                              How To Build An Endless Runner Or Virtual Reality
                            </Link>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div> */}
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
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
