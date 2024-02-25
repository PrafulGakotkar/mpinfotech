"use client"
import React, { useEffect, useState } from "react";
import thumbOne from "../../../public/assets/img/carrer/01.png";
import thumbTwo from "../../../public/assets/img/carrer/02.png";
import thumbThree from "../../../public/assets/img/carrer/03.png";
import thumbFour from "../../../public/assets/img/carrer/04.png";
import thumbFive from "../../../public/assets/img/carrer/05.png";
import thumbSix from "../../../public/assets/img/carrer/06.png";
import thumbSeven from "../../../public/assets/img/carrer/07.png";
import thumbEight from "../../../public/assets/img/carrer/08.png";
import Link from "next/link";
import Image from "next/image";

interface Job {
    job_id: string;
    job_cat_ref_id:string;
    job_title:string;
    job_short_desc:string;
    job_country:string;
    job_exp:string;
    job_details:string;
    job_date_added:string;
    job_type:string;

    // Define other properties here
}

const JobCard = ({ job }: { job: Job }) => (
    
    <div className="col-lg-4 col-md-4">
        <div className="single-blog-post">
            <div className="blog-post-content">
                
                <span>Posted On: {job.job_date_added}</span>
                <span>{job.job_country}</span>
                {/* {job.job_type === 1 && (
                    <span>Job Type: Full Time</span>
                )} */}
                {/* Use ternary operator for more complex conditions */}
                {job.job_type === '1' ? (
                    <span>Job Type: Full Time</span>
                ) : (
                    <span>Job Type: Part Time</span>
                )}
                {/* <span>Job Type: {job.job_type} </span> */}
                <h3>
                    <Link href="/career-details">{job.job_title}</Link>
                </h3>
                <span>{job.job_cat_ref_id}</span>
                <p>{job.job_short_desc}</p>
                <Link href={`/career-details?id=${job.job_id}`} className="read-more-btn">
                    {/* <Link href="/career-details" className="read-more-btn"> */}
                    Read More
                </Link>
            </div>
        </div>
    </div>
);

const CareersSection = () => {
    const [jobList, setJobList] = useState([]);
    // const [jobType, setJobType] = useState([]);

    const jobTypeArr = ["Full Type","Part Type" ];

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://old.mpinfotech.com/api/getJobs', {
                    method: 'POST',
                });
                const data = await response.json();
                const jobList = data.jobList;
                // const jobType = data.jobTypeArray;

                console.log(data);
                console.log(jobList);
                // console.log(jobType);

                setJobList(jobList);
                // setJobType(jobType);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const groupedJobs = jobList.reduce((acc: Job[][], job, index) => {
        const rowIndex = Math.floor(index / 3);
        acc[rowIndex] = [...(acc[rowIndex] || []), job];
        return acc;
    }, []);
    

    return (
        <section className="career-cat-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                        <div className="section-title text-center ml-50 mr-50 mb-75">
                            <span className="border-left-1"></span>
                            <span>Job category</span>
                            <span className="border-right-1"></span>
                            <h1>Our Latest Job Category</h1>
                        </div>
                    </div>
                </div>
                {groupedJobs.map((rowJobs, index) => (
                    <div key={index} className="row">
                        {rowJobs.map(job => (
                            <JobCard key={job.job_id} job={job} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareersSection;
