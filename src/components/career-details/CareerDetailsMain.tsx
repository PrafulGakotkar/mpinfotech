// import Breadcrumb from '@/sheardComponent/Breadcrumb';
// import React from 'react';
// import Categories from './Categories';
// import Courses from './Courses';
// import CareersSection from './CareersSection';

// const CareerDetailsMain = () => {
//     return (
//         <>
//             <Breadcrumb pageTitle='Career'/>
//             {/* <Categories/> */}
//             {/* <Courses/> */}
//             <CareersSection />
//         </>
//     );
// };

// export default CareerDetailsMain;


import Link from "next/link";
import React from "react";

const CareerDetailsMain = () => {
    //   const courseData = [
    //     {
    //       id: 1,
    //       title: "Web Designer",
    //       subTitle: "Full Time",
    //       details:
    //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //     },
    //     {
    //       id: 2,
    //       title: "Web Developer",
    //       subTitle: "Part  Time",
    //       details:
    //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //     },
    //     {
    //       id: 3,
    //       title: "SEO Optimization",
    //       subTitle: "Full Time",
    //       details:
    //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //     },
    //     {
    //       id: 4,
    //       title: "IT Marketing",
    //       subTitle: "Part  Time",
    //       details:
    //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //     },
    //     {
    //       id: 5,
    //       title: "IT Consultant",
    //       subTitle: "Full Time",
    //       details:
    //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //     },
    //     {
    //       id: 6,
    //       title: "Computer Engineer",
    //       subTitle: "Part Time",
    //       details:
    //         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //     },
    //   ];

    return (
        <>
            <section className="job-list-area grey-bg-2 pt-120 pb-90">
                <div className="container">

                    <div className="row justify-content-center">

                        <div className="single-blog-post">

                            <br />
                            <div className="">
                                <span>
                                    India    {/* location */}
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
                            </div>
                            <br />

                            <br />
                        </div>


                    </div>
                    <div className="form-container">
                        <h2>Job Application Form</h2>
                        <form >
                        {/* <form onSubmit={handleSubmit}> */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value=""
                                        // value={formData.firstName}
                                        
                                        // onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value=""
                                     
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email ID:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value=""
                                     
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile No:</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        value=""
                                       
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="education">Highest Education:</label>
                                    <input
                                        type="text"
                                        id="education"
                                        name="education"
                                        value=""
                                        // onChange={}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="experience">Year of Experience:</label>
                                    <input
                                        type="number"
                                        id="experience"
                                        name="experience"
                                        value=""
                                        // onChange={}
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
                                        // onChange={}
                                        accept=".pdf,.doc,.docx"
                                        required
                                    />
                                </div>

                            </div>

                            {/* Repeat similar form-row blocks for other input fields */}

                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>


                </div>
            </section>
        </>
    );
};

export default CareerDetailsMain;
