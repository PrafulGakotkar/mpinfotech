"use client"
import Link from "next/link";
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import loader from "../../../public/assets/img/icon/hzk6C.gif"

interface Job {
    job_id: string | number;
    job_cat_ref_id: string | number;
    job_title: string;
    job_short_desc: string;
    job_country: string;
    job_exp: string;
    job_details: string;
}

const CareerDetailsMain = () => {
    const [response, setResponse] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState("");
    const [failureMessage, setFailureMessage] = useState("");
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const comment1 = "comment"
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        job_id: id,
        comment: comment1,
        resume: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://old.mpinfotech.com/api/getJobs', {
                    method: 'POST',
                });
                const data = await response.json();
                const jobList: Job[] = data.jobList;

                if (id) {
                    const selectedJob = jobList.find(job => job.job_id == id);
                    if (selectedJob) {
                        setJob(selectedJob);
                    } else {
                        setJob(null);
                    }
                }
            } catch (error) {
                console.error('Error fetching job details:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div className="loader text-center">
             <Image className='about-box-img' style={{width:350, height:150}} src={loader} alt="img-data" />

        </div>;
    }

    if (!job) {
        return <div className="text-center">Please refresh the page...</div>;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let newValue: string | File | null = value;
    
        if (name === "phone") {
            newValue = value.replace(/\D/g, '');
            newValue = newValue.slice(0, 10);
        }
    
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formDataObject = new FormData(form);
        formDataObject.append('comment',comment1);


        if (id !== null) {
            formDataObject.append('job_id', id);
        }

        try {
            const response = await fetch('https://old.mpinfotech.com/api/application', {
                method: 'POST',
                body: formDataObject,
            });

            if (response.ok) {
                const data = await response.json();
                setShowSuccessMessage(`Congratulations... ${formData.name} Your application submitted successfully...`);
                form.reset();
            } else {
                setFailureMessage("Failed to submit your application. Please try again later...");
            }
        } catch (error) {
            setFailureMessage("Failed to submit data. Please try again later...");
            console.error('Error:', error);
        }

        form.reset();
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
                            <div key={job.job_id} className="form-container">
                                <span>{job.job_country}</span>
                                <h3>{job.job_title}</h3>
                                <p><b>Project Role : </b>{job.job_cat_ref_id} </p>
                                <p> <b> Project Role Description :</b> {job.job_short_desc}</p>
                                <p> <b> Experience :</b> {job.job_exp}</p>
                                <div><b>Summary: </b><div dangerouslySetInnerHTML={{ __html: job.job_details }} /></div>
                            </div>
                            < hr />
                            
                            { showSuccessMessage ? ( // Conditional rendering based on the state
                                <div className="success-message text-center mt-20">
                                   <p style={{fontSize:20}}> {showSuccessMessage}</p>
                                   {/* <p style={{fontSize:20}}>Your message has been successfully submitted!, we will contact you soon!</p> */}
                                </div>
                                 ) : ( 

                             <div className="form-container">
                                {/* {successMessage && <div className="success-message text-center" style={{ fontSize: 18 }}>{successMessage}</div>} */}
                                {failureMessage && <div className="failure-message" style={{ fontSize: 18, color:"red" }}>{failureMessage}</div>}
                                <h3>Apply Here</h3><br />
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                    <div className="col-lg-6">
                                                <div className="form-box user-icon mb-30">
                                            <label htmlFor="name">Name:</label>
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
                                        </div>

                                        <div className="col-lg-6">
                                             <div className="form-box user-icon mb-30">
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
                                        </div>
                                    </div>

                                    <div className="row">
                                    <div className="col-lg-6">
                                                <div className="form-box user-icon mb-30">
                                            <label htmlFor="phone">Mobile No:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="Mobile No"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                                <div className="form-box user-icon mb-30">
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
                                        </div>

                                        {/* <div className="form-group">
                                            <label htmlFor="comment">Comment:</label>
                                            <input
                                                type="text"
                                                id="comment"
                                                name="comment"
                                                placeholder="Comment"
                                                value={formData.comment}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div> */}
                                    </div>
                                    <div className="form-row">
                                        {/* <div className="form-group">
                                            <label htmlFor="resume">Resume:</label>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                onChange={handleChange}
                                                accept=".pdf,.doc,.docx"
                                                required
                                            />
                                        </div> */}
                                    </div>
                                    <div className="contact-btn">
                                        <button className="btn" type="submit"><span className="btn-text">Submit <i className='fas fa-long-arrow-alt-righ'></i></span> <span className="btn-border"></span></button>
                                    </div>
                                </form>
                            </div>
            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareerDetailsMain;









// "use client"
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';

// interface Job {
//     job_id: string | number; // Update type to string | number
//     job_cat_ref_id: string | number; // Update type to string | number
//     job_title: string;
//     job_short_desc: string;
//     job_country: string;
//     job_exp: string;
//     job_details: string;
//     // Define other properties here
// }



// const CareerDetailsMain = () => {


//     const [response, setResponse] = useState(null);
//     const [successMessage, setSuccessMessage] = useState("");
//     const [failureMessage, setFailureMessage] = useState("");
//     const [job, setJob] = useState<Job | null>(null);
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         job_id: id,
//         comment: " ",
//         resume: null
//     });

//     // State to store job details


//     // Fetch job details using the job ID
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch job details from the API
//                 const response = await fetch('https://old.mpinfotech.com/api/getJobs', {
//                     method: 'POST',
//                 });
//                 const data = await response.json();
//                 // const jobList = data.jobList;
//                 const jobList: Job[] = data.jobList;


//                 if (id) {
//                     console.log("id ", id);
//                     // Filter the job details based on the ID from the URL
//                     const selectedJob = jobList.find(job => job.job_id == id);
//                     if (selectedJob) {
//                         setJob(selectedJob);
//                     } else {
//                         setJob(null); // Set job to null if selectedJob is undefined
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching job details:', error);

//             }
//         }

//         fetchData();
//     }, [id]);

//     if (!job) {
//         return <div className="text-center">Please refresh the page...</div>;
//     }



//     // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     //     const { name, value } = e.target;


//     //     let newValue: string | File | null;
//     //     // Check if the input element is a file input
//     //     if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
//     //         // For file inputs, use the `files` property
//     //         const files = e.target.files;
//     //         newValue = files ? files[0] : null;
//     //     } else {
//     //         newValue = value;
//     //     }


//     //     // Perform validation for mobile number
//     //     if (name === "phone") {
//     //         // Ensure only numbers are entered for mobile
//     //         newValue = value.replace(/\D/g, '');
//     //         // Limit mobile number to 10 digits
//     //         newValue = newValue.slice(0, 10);
//     //     }

//     //     // Perform validation for email
//     //     if (name === "email") {
//     //         // Regular expression for email validation
//     //         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     //         if (!emailPattern.test(value)) {
//     //             // Invalid email, you can show a message or perform some action
//     //             console.log("Invalid email");
//     //             return;
//     //         }
//     //     }

//     //     setFormData((prevFormData) => ({
//     //         ...prevFormData,
//     //         [name]: newValue
//     //     }));
//     // };

//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
    
//         let newValue: string | File | null = value;
    
//         // Perform validation for mobile number
//         if (name === "phone") {
//             // Ensure only numbers are entered for mobile
//             newValue = value.replace(/\D/g, '');
//             // Limit mobile number to 10 digits
//             newValue = newValue.slice(0, 10);
//         }
    
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: newValue
//         }));
//     };
    

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const form = e.target as HTMLFormElement;
//         const formDataObject = new FormData(form);
//         // Set the job_id from the URL parameter to the form data
//         if (id !== null) {
//             formDataObject.append('job_id', id);
//         }

//         try {
//             const response = await fetch('https://old.mpinfotech.com/api/application', {
//                 method: 'POST',
//                 body: formDataObject,
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log('Success:', data);
//                 // Set success message
//                 setSuccessMessage(`Congratulations... ${formData.name} Application submitted successfully...`);
//                 // Clear form
//                 form.reset();
//             } else {
//                 // Set failure message
//                 setFailureMessage(" Failed to submit your application. Please try again later...");
//             }
//         } catch (error) {
//             // Set failure message
//             setFailureMessage("Failed to submit data. Please try again later...");
//             console.error('Error:', error);
//         }
//         console.log(response);
//         // Clear the form after submission
//         form.reset();

//         // Clear form state after submission
//         setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             job_id: "",
//             comment: "",
//             resume: null
//         });
//     };




//     return (
//         <>
//             <section className="job-list-area grey-bg-2 pt-120 pb-90">
//                 <div className="container">

//                     <div className="row justify-content-center">

//                         <div className="single-blog-post">

//                             <br />

//                             <div key={job.job_id} className="">

//                                 <span>{job.job_country}</span>
//                                 <h3>{job.job_title}</h3>
//                                 <p><b>Project Role : </b>{job.job_cat_ref_id} </p>
//                                 <p> <b> Project Role Description :</b> {job.job_short_desc}</p>
//                                 <p> <b> Experience :</b> {job.job_exp}</p>
//                                 <div><b>Summary: </b><div dangerouslySetInnerHTML={{ __html: job.job_details }} /></div>
//                                 {/* <p><b>Summary: </b>{JSON.stringify(job.job_details)}</p> */}
//                                 {/* <p> <b>Summary: </b> {job.job_details} </p> */}



//                                 {/* <span>Posted On : {job.job_date_added}</span>
//                                     <span>Job Type : {job.job_type}</span>
//                                     <p>{job.job_details}</p> */}

//                             </div>


//                             {/* <div className="">
//                                 <span>
//                                     4365, US Route-1 South,Suite 202, Princeton, NJ, 08540    {/* location */}{/*
//                                 </span>

//                                 <h3>
//                                     Application Developer
//                                 </h3>

//                                 <p><b>Project Role :</b> Application Developer</p>
//                                 <p> <b> Project Role Description :</b> Design, build and configure applications to meet business process and application requirements.</p>
//                                 <p><b> Must have skills :</b> Oracle Hyperion Financial Management (HFM)</p>
//                                 <p><b> Good to have skills :</b> NA</p>
//                                 <p>   Minimum 2 year(s) of experience is required</p>
//                                 <p> <b> Educational Qualification :</b> As per organization standard</p>


//                                 <p>
//                                     <b>Summary: </b>As an Application Developer, you will be responsible for designing, building, and configuring applications to meet business process and application requirements using Oracle Hyperion Financial Management (HFM). Your typical day will involve working with HFM, developing and configuring applications, and collaborating with cross-functional teams to ensure successful project delivery. Roles & Responsibilities: A: Design, build, and configure applications using Oracle Hyperion Financial Management (HFM) to meet business process and application requirements. B: Collaborate with cross-functional teams to ensure successful project delivery, including working with business analysts, project managers, and other developers. C: Develop and configure applications using HFM, including creating and maintaining metadata, rules, and reports. D: Troubleshoot and resolve issues related to HFM applications, including performance tuning and optimization. Professional & Technical Skills: A: The candidate should have a minimum of 5 years of experience in Oracle Hyperion Financial Management (HFM). B: The ideal candidate will possess a strong educational background in finance, accounting, or a related field, along with a proven track record of delivering impactful solutions using HFM. C: Must To Have Skills: Experience with Oracle Hyperion Financial Management (HFM). D: Good To Have Skills: No Technology Specialization. E: Strong understanding of financial management and accounting principles. F: Experience with HFM application development, including creating and maintaining metadata, rules, and reports. G: Experience with troubleshooting and resolving issues related to HFM applications. H: Experience with performance tuning and optimization of HFM applications. Additional Information: A: This position is based at our Pune office.
//                                 </p>
//                             </div> */}


//                             <br />
//                             <br />

//                             <div className="form-container">
//                                 {successMessage && <div className="success-message text-center" style={{ fontSize: 18 }}>{successMessage}</div>}
//                                 {failureMessage && <div className="failure-message" style={{ fontSize: 18 }}>{failureMessage}</div>}
//                                 <h2>Apply Here</h2><br />
//                                 <h4>Job Application Form</h4>
//                                 {/* <form > */}
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="form-row">
//                                         <div className="form-group">
//                                             <label htmlFor="name">Name:</label>
//                                             <input
//                                                 type="text"
//                                                 id="name"
//                                                 name="name"
//                                                 placeholder="Name"
//                                                 value={formData.name}
//                                                 onChange={handleChange}

//                                                 required
//                                             />
//                                         </div>
//                                         {/* <div className="form-group">
//                                             <label htmlFor="email">Email:</label>
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 name="email"
//                                                 placeholder="Email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}

//                                                 required
//                                             />
//                                         </div> */}

//                                         <div className="form-group">
//                                             <label htmlFor="email">Email ID:</label>
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 name="email"
//                                                 placeholder="Email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 required
//                                             />

//                                         </div>

//                                     </div>

//                                     <div className="form-row">

//                                         <div className="form-group">
//                                             <label htmlFor="phone">Mobile No:</label>
//                                             <input
//                                                 type="tel"
//                                                 id="phone"
//                                                 name="phone"
//                                                 placeholder="phone"
//                                                 value={formData.phone}
//                                                 onChange={handleChange}

//                                                 required
//                                             />
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="comment">Comment:</label>
//                                             <input
//                                                 type="text"
//                                                 id="comment"
//                                                 name="comment"
//                                                 placeholder="comment"
//                                                 value={formData.comment}
//                                                 onChange={handleChange}

//                                                 required
//                                             />
//                                         </div>



//                                     </div>

//                                     <div className="form-row">


//                                         <div className="form-group">
//                                             <label htmlFor="resume">Resume:</label>
//                                             <input
//                                                 type="file"
//                                                 id="resume"
//                                                 name="resume"
//                                                 onChange={handleChange}
//                                                 accept=".pdf,.doc,.docx"
//                                                 required
//                                             />
//                                         </div>

//                                     </div>




//                                     {/* Repeat similar form-row blocks for other input fields */}

//                                     {/* <button className="btn btn-primary" type="submit">Submit</button> */}
//                                     <div className="contact-btn">
//                                         <button className="btn" type="submit"><span className="btn-text">Submit <i className='fas fa-long-arrow-alt-righ'></i></span> <span className="btn-border"></span></button>
//                                     </div>
//                                 </form>
//                             </div>

//                         </div>


//                     </div >

//                 </div >
//             </section >
//         </>
//     );
// };

// export default CareerDetailsMain;
