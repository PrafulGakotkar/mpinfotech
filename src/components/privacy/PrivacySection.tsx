import React from "react";

import imgOne from "../../../public/assets/img/product/Data-Protection.png";
import Image from "next/image";
import Link from "next/link";
import thumbOne from "../../../public/assets/img/blog/details/banner.jpg";
import { blogData } from "@/data/blog-data";
import SocilaLinks from "@/utils/SocilaLinks";
import ArticleLayout from "../product/ArticleLayout";

const BlogSection = () => {
  return (
    <>
      <section className="blog-area pt-120 pb-80">
        <div className="container">
          <div className="row">



            <div className="widget mb-40">
              <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 >Privacy & Policy:</h3> {/*className="widget-title"*/}
              </div>
              {/* <div className="about-me text-center"> */}
              <div className="about-me">
                {/* <Image src={imgOne} alt="" /> */}
                {/* <h4>Zulia Maron Duo</h4> */}
                <p> The mradar.mpitcloud.com web sites (the “Site”) is owned and operated by MP INFOTECH CORP (MPIT). MPIT collects personally identifiable information and non-personal information on the Site. MPIT is committed to protecting your privacy. We have created this Privacy Policy to explain how we collect and use personally identifiable information. If you have any questions or concerns about MPIT information collection and use practices, please send an email stating your questions or concerns, with the subject heading “Privacy Policy Question”, to info@mpinfotech.com.

                </p><br/>
                <h3 >Collections and Uses of Personal Information</h3>
                <p>When you use or register with the Site, we may ask for certain Personal Information. The categories of Personal Information we may request include your name, your job title, your company’s name and industry sector, your company’s location (country, state and zip code) and your contact information (email and phone number). Depending on the nature of your inquiry or activities on the Site, we may also obtain information about your professional interests through white papers or newsletters you request, as well as professional interests that you specifically describe to us. Providing Personal Information is necessary for performance of the services and functionality offered by the Site. If you decline to provide the requisite Personal Information, we may not be able to process your inquiry or other requests.</p>
                <p>We use Personal Information and other data collected through the Site to register you with the Site and to otherwise provide you with requested information or services. We may also from time to time use your Personal Information to send you automated email messages or marketing materials regarding our services. These email messages may contain web beacons and other features that help us make sure that you received and were able to open the message. You may opt out of receiving such marketing email messages at any time by sending a message with “unsubscribe” in the subject line to info@mpinfotech.com.</p><br/>
                
                <h3>Disclosures of Personal Information</h3>
                <p>MPIT may disclose Personal Information to third parties and that would occur in the following circumstances:</p>

                <p><i className="fa-solid fa-arrow-right"></i> We may disclose Personal Information to our affiliates in your local jurisdiction or other locations as necessary or appropriate to provide the product or service you requested, to contact you in connection with product or service offerings, or for other legitimate business purposes. The names and addresses of our affiliates are provided at the end of this Policy.</p>

                <p><i className="fa-solid fa-arrow-right"></i> We may disclose information to companies and individuals we employ to perform business functions and services on our behalf. Such functions may include hosting our Web servers, analyzing data, providing legal, accounting and marketing services, and providing other support services. All such parties will be under obligation to maintain the security and confidentiality of the Personal Information, and to process the data in accordance with our instructions.</p>

                <p><i className="fa-solid fa-arrow-right"></i> We may disclose Personal Information to the extent necessary or appropriate to government agencies, advisors, and other third parties in order to comply with applicable laws, or if such action is necessary to protect the rights or property of MPIT or its affiliated companies.</p><br/>

                <h3>Personal Data Security and Confidentiality</h3>
                <p>We maintain adequate technical and organizational security measures to protect Personal Information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction.</p><br/>

                <h3>Revisions to the Policy</h3>
                <p>If we change this policy, we will post any updates here for your review. If we change material terms in this Policy, we will provide notice of the revised policy for 30 days on the home page www.mpinfotech.com with a link back to this page. We will also take other steps as necessary depending on the nature of the changes, including obtaining your consent where required by local data protection laws, or providing you with the opportunity to delete your Personal Information.</p>
                {/* <div className="read-more mt-30 btn">
                  <Link href={`/blog-details`}>
                    <span className="btn-text">
                      Get Started <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div> */}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogSection;
