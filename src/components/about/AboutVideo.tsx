"use client"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import imgVideo from "../../../public/assets/img/bg/c.jpg"
import Image from 'next/image';
import Link from 'next/link';

const AboutVideo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="choose-wrapper">
            {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} /> */}
            <div className="choose-text">
                <p style={{marginBottom:"0px "}}>MP Infotech Corp (MPIT) is an IT service and solution company to enable our customer’s business through various service offerings like Cloud Transformation, Software development, and Cyber / Information Security. We have created strategic partnerships with leading technology companies like Amazon Web Service (AWS), Alertlogic, Force point and provide value-added services with our experience and best practices, helping our clients to maximize their IT investment and enable them to meet their “Time to Market” demands. Our multi-cloud security and governance platform, MRADAR® enables our customers to secure their data in the cloud.</p>

                <div className="services-text">
                    <Link href="/ourProduct">
                        <span className="services-button">
                            Our Products{" "}
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                    </Link>
                </div >
            </div>
        </div>
    );
}

export default AboutVideo;