import React from "react";
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
const CareersSection = () => {
    const categoriesData = [
        {
            id: 1,
            title: "It Solutions",
            img: thumbOne,
        },
        {
            id: 2,
            title: "It Solutions",
            img: thumbTwo,
        },
        {
            id: 3,
            title: "Product Design",
            img: thumbThree,
        },
        {
            id: 4,
            title: "Server Security",
            img: thumbFour,
        },
        {
            id: 5,
            title: "It Management",
            img: thumbFive,
        },
        {
            id: 6,
            title: "UX/UI Strategy",
            img: thumbSix,
        },
        {
            id: 7,
            title: "IT Marketing",
            img: thumbSeven,
        },
        {
            id: 8,
            title: "Bank & Finance",
            img: thumbEight,
        },
    ];

    return (
        <>
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
                    {/* <div className="row"> */}
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">


                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                            {/* Read More <Icon.ArrowRight /> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">

                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">

                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div><br/><br/>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">


                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                            {/* Read More <Icon.ArrowRight /> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">

                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">

                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div><br/><br/>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">


                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                            {/* Read More <Icon.ArrowRight /> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">

                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">

                                    <div className="blog-post-content">
                                        <span>

                                            India    {/* location */}
                                        </span>

                                        <h3>
                                            <Link href="/career-details">
                                                Application Developer
                                            </Link>
                                        </h3>

                                        <span>
                                            {/* By <Link href="/author">Admin</Link> */}
                                            Software engineering    {/* job Category */}
                                        </span>

                                        <p>
                                            Design, build and configure applications to meet business process and application requirements.
                                        </p>

                                        <Link href="/career-details" className="read-more-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        


                    
                {/* </div> */}
            </div>
        </section >
        </>
    );
};

export default CareersSection;
