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
                <p style={{marginBottom:"0px "}}>Cyber Space Technologies is a leading IT solutions provider in the United States. We collaborate with industry experts to deliver innovative solutions to complex business challenges. Our services, including Cloud FinOps, Migration, ManageIT, Big Data, Data Science, Business Intelligence, Machine Learning, Artificial Intelligence, and Cyber Security, empower our clients to uncover the value of their data.</p>

                <div className="services-text">
                    <Link href="https://www.mradar360.com/">
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