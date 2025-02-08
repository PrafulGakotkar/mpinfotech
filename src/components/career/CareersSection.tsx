"use client"
<<<<<<< HEAD
import { useEffect } from 'react';

const CareersArea = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://jobsapi.ceipal.com/APISource/widget.js';
    script.async = true;
    script.setAttribute('data-ceipal-api-key', 'cGk5SkhsQXhHSUduYTFCYWRLU3dRZz09');
    script.setAttribute('data-ceipal-career-portal-id', 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09');
    
    const container = document.getElementById('example-widget-container');
    if (!container) {
      console.error("Container element not found.");
      return;
    }

    container.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <section className="brand-area pb-120 pt-80">
        <div className="container">
          <h2 className="tp-brand-title text-center">Current <span style={{color:'#3C72FC'}}>Openings</span></h2>
          <div id="example-widget-container"></div>
        </div>
      </section>
    </>
  );
=======
import React, { useEffect, useState } from "react";
import loader from "../../../public/assets/img/icon/hzk6C.gif";
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

const Loader = () => (
    <div className="loader-container">
        <div className="loader"></div>
    </div>
);

const JobCard = ({ job }: { job: Job }) => (
    
    <div className="col-lg-4 col-md-4">
        <div className="single-blog-post">
            <div className="blog-post-content">
                
                <span>Posted On: {job.job_date_added}</span>
                <span>{job.job_country}</span>
                {job.job_type === '1' ? (
                    <span>Job Type: Full Time</span>
                ) : (
                    <span>Job Type: Part Time</span>
                )}
                <h3>
                    <Link href={`/career-details?id=${job.job_id}`}>{job.job_title}</Link>
                </h3>
                <span>{job.job_cat_ref_id}</span>
                <p>{job.job_short_desc}</p>
                <Link href={`/career-details?id=${job.job_id}`} className="read-more-btn">
                    Read More
                </Link>
            </div>
        </div>
    </div>
);

const CareersSection = () => {
    const [jobList, setJobList] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // const response = await fetch('https://interstellar-trinity-923715.postman.co/workspace/WayMoackTestApis~dc652796-304b-4b9d-95bc-72737f85dd60/collection/11870290-40bfc171-9c5b-4f0e-a71f-8cceb096b5f0?action=share&creator=11870290', {
                const response = await fetch('https://old.mpinfotech.com/api/getJobs', {
                    method: 'POST',
                });
                const data = await response.json();
                const jobList = data.jobList;

                console.log(data)

                setJobList(jobList);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const groupedJobs = jobList.reduce((acc: Job[][], job, index) => {
        const rowIndex = Math.floor(index / 3);
        acc[rowIndex] = [...(acc[rowIndex] || []), job];
        return acc;
    }, []);

    if (loading) {
        return <div className="loader text-center">
             <Image className='about-box-img' style={{width:350, height:150}} src={loader} alt="img-data" />

        </div>;
    }

    if (jobList.length === 0) {
        return <div className="text-center">No jobs found.</div>;
    }

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
>>>>>>> a32ba11 (first commit)
};

export default CareersArea;
