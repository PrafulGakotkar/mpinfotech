import React, { useState} from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// import * as Icon from "react-feather"
import { Link } from "gatsby"
// import BlogSidebar from "../components/Blog/BlogSidebar"

import ServicesDetails1 from "../images/pagebanner/favicon.png"

// Shape Images
// import Shape2 from "../images/shape2.svg"
// import Shape3 from "../images/shape3.svg"
// import Shape4 from "../images/shape4.svg"

const Careers = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    education: "",
    experience: "",
    resume: null,
});

const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: name === "resume" ? files[0] : value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
};

return(
<Layout>
    <Navbar />


    {/* <PageBanner pageTitle="Careers" /> */}
    <div className="career-details">
        <div className="row align-items-center">
            <div className="col-lg-6 services-details">
                <div className="">job search</div>
                <div className="bar"></div>
                <h2>Application Developer</h2>
                <span>pune</span>
                <span className="vertical-seperator">|</span>
                <span>job id</span><br /><br />
                {/* <div className="others-option">
                    <Link to="/applicationForm" className="btn btn-primary">
                        Apply Now
                    </Link>
                </div> */}
            </div>

            <div className="col-lg-6 services-details-image">
                <img
                    style={{ height: 160, width: 300 }}
                    src={ServicesDetails1}
                    className="animate__animated animate__fadeInUp service-image"
                    alt="Services"
                />
            </div>
        </div>


    </div>


    <div className="blog-area ">
        <div className="container">
            <div className="row justify-content-center">

                <div className="single-blog-post">
                    {/* <div className="blog-image">
                <div className="date">
                  <Icon.Calendar /> March 15, 2023
                </div>
              </div> */}
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
                    {/* <div className="others-option">
                        <Link to="/applicationForm" className="btn btn-primary">
                            Apply Now
                        </Link>

                        {/* <Link to="/login" className="btn btn-primary">
                                  Login
                                 </Link> *
                    </div> */}
                    <br />
                </div>


            </div>
        </div>
    </div>
    <div className="form-container">
        <h2>Job Application Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile No:</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
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
                        value={formData.education}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="experience">Year of Experience:</label>
                    <input
                        type="number"
                        id="experience"
                        name="experience"
                        value={formData.experience}
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

            </div>

            {/* Repeat similar form-row blocks for other input fields */}

            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>


    <Footer />
</Layout>
)}

export const Head = () => <Seo title="Careers" />

export default Careers
