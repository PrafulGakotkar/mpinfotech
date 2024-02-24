
"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';


const CareerDetailsMain = () => {


    const [response, setResponse] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        job_id: id,
        comment: " ",
        resume: null
    });

    // State to store job details
    const [job, setJob] = useState(null);

    // Fetch job details using the job ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch job details from the API
                const response = await fetch('https://old.mpinfotech.com/api/getJobs', {
                    method: 'POST',
                });
                const data = await response.json();
                const jobList = data.jobList;

                if (id) {
                    console.log("id ", id);
                    // Filter the job details based on the ID from the URL
                    const selectedJob = jobList.find(job => job.job_id == id);
                    setJob(selectedJob);
                }
            } catch (error) {
                console.error('Error fetching job details:', error);

            }
        }

        fetchData();
    }, [id]);

    if (!job) {
        return <div>Loading...</div>;
    }



    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target;


        let newValue = value;

        // Perform validation for mobile number
        if (name === "phone") {
            // Ensure only numbers are entered for mobile
            newValue = value.replace(/\D/g, '');
            // Limit mobile number to 10 digits
            newValue = newValue.slice(0, 10);
        }

        // Perform validation for email
        if (name === "email") {
            // Regular expression for email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                // Invalid email, you can show a message or perform some action
                console.log("Invalid email");
                return;
            }
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : newValue
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formDataObject = new FormData(form);
        // Set the job_id from the URL parameter to the form data
        formDataObject.append('job_id', id);

        try {
            const response = await fetch('https://old.mpinfotech.com/api/application', {
                method: 'POST',
                body: formDataObject,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                // Set response state if needed
                setResponse(data);
            } else {
                // Log error if response is not ok
                console.error('Error:', response.statusText);
                console.log('Failed to submit data.');
            }
        } catch (error) {
            // Log error if there's an exception during fetch
            console.error('Error:', error);
            console.log('Failed to submit data.');
        }

        // Clear the form after submission
        form.reset();

        // Clear form state after submission
        setFormData({
            name: "",
            email: "",
            phone: "",
            job_id: "",
            comment: "",
            resume: null
        });
    };




    return (
        <>
            <section className="job-list-area grey-bg-2 pt-120 pb-90">
                <div className="container">

                    <div className="row justify-content-center">

                        <div className="single-blog-post">

                            <br />

                            <div key={job.job_id} className="">

                                <span>{job.job_country}</span>
                                <h3>{job.job_title}</h3>
                                <p><b>Project Role : </b>{job.job_cat_ref_id} </p>
                                <p> <b> Project Role Description :</b> {job.job_short_desc}</p>
                                <p> <b> Experience :</b> {job.job_exp}</p>
                                <p>
                                    <b>Summary: </b> {job.job_details} </p>


                                {/* <span>Posted On : {job.job_date_added}</span>
                                    <span>Job Type : {job.job_type}</span>
                                    <p>{job.job_details}</p> */}

                            </div>


                            {/* <div className="">
                                <span>
                                    4365, US Route-1 South,Suite 202, Princeton, NJ, 08540    {/* location */}{/*
                                </span>

                                <h3>
                                    Application Developer
                                </h3>

                                <p><b>Project Role :</b> Application Developer</p>
                                <p> <b> Project Role Description :</b> Design, build and configure applications to meet business process and application requirements.</p>
                                <p><b> Must have skills :</b> Oracle Hyperion Financial Management (HFM)</p>
                                <p><b> Good to have skills :</b> NA</p>
                                <p>   Minimum 2 year(s) of experience is required</p>
                                <p> <b> Educational Qualification :</b> As per organization standard</p>


                                <p>
                                    <b>Summary: </b>As an Application Developer, you will be responsible for designing, building, and configuring applications to meet business process and application requirements using Oracle Hyperion Financial Management (HFM). Your typical day will involve working with HFM, developing and configuring applications, and collaborating with cross-functional teams to ensure successful project delivery. Roles & Responsibilities: A: Design, build, and configure applications using Oracle Hyperion Financial Management (HFM) to meet business process and application requirements. B: Collaborate with cross-functional teams to ensure successful project delivery, including working with business analysts, project managers, and other developers. C: Develop and configure applications using HFM, including creating and maintaining metadata, rules, and reports. D: Troubleshoot and resolve issues related to HFM applications, including performance tuning and optimization. Professional & Technical Skills: A: The candidate should have a minimum of 5 years of experience in Oracle Hyperion Financial Management (HFM). B: The ideal candidate will possess a strong educational background in finance, accounting, or a related field, along with a proven track record of delivering impactful solutions using HFM. C: Must To Have Skills: Experience with Oracle Hyperion Financial Management (HFM). D: Good To Have Skills: No Technology Specialization. E: Strong understanding of financial management and accounting principles. F: Experience with HFM application development, including creating and maintaining metadata, rules, and reports. G: Experience with troubleshooting and resolving issues related to HFM applications. H: Experience with performance tuning and optimization of HFM applications. Additional Information: A: This position is based at our Pune office.
                                </p>
                            </div> */}


                            <br />
                            <br />

                            <div className="form-container">
                                <h2>Apply Here</h2><br />
                                <h4>Job Application Form</h4>
                                {/* <form > */}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}

                                                required
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                    <label htmlFor="Name">Name:</label>
                                    <input
                                        type="text"
                                        id="Name"
                                        name="Name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div> */}
                                    </div>
                                    <div className="form-row">

                                        <div className="form-group">
                                            <label htmlFor="email">Email ID:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}

                                                required
                                            />
                                        </div>

                                        {/* <div className="form-group">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value=""
                                     
                                        required
                                    />
                                </div> */}

                                    </div>
                                    <div className="form-row">

                                        <div className="form-group">
                                            <label htmlFor="phone">Mobile No:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="phone"
                                                value={formData.phone}
                                                onChange={handleChange}

                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">

                                        <div className="form-group">
                                            <label htmlFor="comment">Comment:</label>
                                            <input
                                                type="text"
                                                id="comment"
                                                name="comment"
                                                placeholder="comment"
                                                value={formData.comment}
                                                onChange={handleChange}

                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">


                                        <div className="form-group">
                                            <label htmlFor="resume">Resume:</label>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                onChange={handleChange}
                                                accept=".pdf,.doc,.docx"
                                                required
                                            />
                                        </div>

                                        {/* <div className="form-group">
                                            <label htmlFor="education">Highest Education:</label>
                                            <input
                                                type="text"
                                                id="education"
                                                name="education"
                                                placeholder="Highest Education"
                                                // value={formData.education}
                                                // onChange={handleChange}
                                                required
                                            />
                                        </div> */}
                                    </div>
                                    {/* <div className="form-row">

                                        {/* <div className="form-group">
                                            <label htmlFor="experience">Year of Experience:</label>
                                            <input
                                                type="number"
                                                id="experience"
                                                name="experience"
                                                placeholder="Year of Experience"
                                                // value={formData.experience}
                                                // onChange={handleChange}
                                                required
                                            />
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="resume">Resume:</label>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                // value={formData.resume}
                                                // onChange={handleChange}
                                                accept=".pdf,.doc,.docx"
                                                required
                                            />
                                        </div> 

                                    </div> */}


                                    {/* Repeat similar form-row blocks for other input fields */}

                                    {/* <button className="btn btn-primary" type="submit">Submit</button> */}
                                    <div className="contact-btn">
                                        <button className="btn" type="submit"><span className="btn-text">Submit <i className='fas fa-long-arrow-alt-righ'></i></span> <span className="btn-border"></span></button>
                                    </div>
                                </form>
                            </div>

                        </div>


                    </div >

                </div >
            </section >
        </>
    );
};

export default CareerDetailsMain;
