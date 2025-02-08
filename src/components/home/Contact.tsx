"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [authKey, setAuthKey] = useState('add');
    const [response, setResponse] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    type FormData = {
        [key: string]: string;
    };
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });



    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            console.log("Invalid email");
            return;
        }

        const formDataObject = new FormData();
        Object.keys(formData).forEach(key => {
            formDataObject.append(key, formData[key]);
        });

        try {
            // const response = await fetch('https://old.mpinfotech.com/api/getJobs', {
            const response = await fetch('https://old.mpinfotech.com/api/enquiry', {
                method: 'POST',
                //   headers: {
                //     'Content-Type': 'application/json',
                //     'authKey':'add',
                //   },
                body: formDataObject,
                //   body: JSON.stringify(formData)
            });

            const data = await response.json();
            setResponse(data);
            setSuccessMessage('Your message submitted successfully!, we will contact soon!');
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to submit your message please try again! ');
            console.log('Failed to submit data.');
        }

        // try {
        //     const response = await axios.post('https://old.mpinfotech.com/api/enquiry', formData, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'authKey': `${authKey}`
        //         }
        //     });

        //     setResponse(response.data);
        //     console.log('Success:', response.data);
        //   } catch (error) {
        //     console.error('Error:', error);
        //     console.log('Failed to submit data.');
        //   }


        // Display form data in the console
        console.log("Form Data:", Object.fromEntries(formDataObject));

        // Now you can use formDataObject to submit the form data to an API endpoint or perform any other action

        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            {successMessage ? ( // Conditional rendering based on the state
                <div className="success-message text-center mt-20">
                    <p style={{ fontSize: 20 }}> {successMessage}</p>
                    {/* <p style={{fontSize:20}}>Your message has been successfully submitted!, we will contact you soon!</p> */}
                </div>
            ) : (
                <div className="contact-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                                <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
                                    <span className="border-left-1"></span>
<<<<<<< HEAD
                                    <span>Get in Touch</span>
=======
                                    <span>contact us</span>
>>>>>>> a32ba11 (first commit)
                                    <span className="border-right-1"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-bg">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 mb-30">
                                    <div className="map-wrapper">
                                        <div className="contact-map">
                                            <iframe
                                                loading="lazy"
                                                src="https://maps.google.com/maps?q=4365%20US-1%2C%20Princeton%2C%20NJ%2008540%2C%20USA&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                                                title="4365 US-1, Princeton, NJ 08540, USA"
                                                aria-label="4365 US-1, Princeton, NJ 08540, USA">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 mb-30">
                                    <div className="appointment-wrapper">
                                        <form id="appointment-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-box user-icon mb-30">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Full Name Here"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                        />
                                                        <span><i className='fas fa-user'></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-box email-icon mb-30">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            placeholder="Email Here"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                        <span><i className='fas fa-envelope'></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-box date-icon mb-30">
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            placeholder="Subject"
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                        />
                                                        <span><i className='fas fa-chevron-down'></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-box message-icon mb-30">
                                                        <textarea
                                                            name="message"
                                                            id="message"
                                                            cols={30}
                                                            rows={10}
                                                            placeholder="Write message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                        ></textarea>
                                                        <span><i className='fas fa-pencil-alt'></i></span>
                                                    </div>
                                                    <div className="contact-btn">
                                                        <button className="btn" type="submit"><span className="btn-text">send message <i className='fas fa-long-arrow-alt-right'></i></span> <span className="btn-border"></span></button>
                                                    </div>
                                                    {successMessage && <p className="text-success">{successMessage}</p>}
                                                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Contact;
