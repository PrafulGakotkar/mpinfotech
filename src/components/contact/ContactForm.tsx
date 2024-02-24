"use client"
import React, { FormEvent, ChangeEvent, useState } from 'react';

const ContactForm = () => {
    const [authKey, setAuthKey] = useState('add');
    const [response, setResponse] = useState(null);

    type FormData = {
        [key: string]: string;
    };
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
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
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
            console.log('Failed to submit data.');
        }


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
            <div className="contact-2-area pt-120 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title text-center ml-50 mr-50 mb-75">
                                <span className="border-left-1"></span>
                                <span>contact us</span>
                                <span className="border-right-1"></span>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="appointment-wrapper contact-form-page">
                            {/* <form className="appointment-form"> */}
                            <form onSubmit={handleSubmit} id="" className="appointment-form">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-box user-icon mb-30">
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Full Name Here"
                                                type="text"
                                            />
                                            <span><i className='fas fa-user'> </i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-box email-icon mb-30">
                                            {/* <input type="text" name="email" placeholder="Email Here" /> */}
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Here"
                                                type="text"
                                            />
                                            <span><i className='fas fa-envelope'> </i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-box date-icon mb-30">
                                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
                                            <span><i className='fas fa-chevron-down'> </i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-box message-icon mb-30">
                                            <textarea name="message" id="message" cols={30} rows={10}
                                                value={formData.message} onChange={handleChange} placeholder="Write message"></textarea>
                                            <span><i className='fas fa-pencil-alt'> </i></span>
                                        </div>
                                        <div className="contact-btn contact-2-btn text-center">
                                            <button className="btn" type="submit"><span className="btn-text">send message <i className='fas fa-long-arrow-alt-right'> </i></span> <span className="btn-border"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;