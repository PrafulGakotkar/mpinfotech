import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/cloud-governance-1.jpg";
import imgTwo from "../../../public/assets/img/new/Data Governance.2a186cc2.jpg";

import Link from "next/link";


const OfferingSection = () => {
    return (
        <>


            <section id="sec_analytics" className="blog-area pt-100 pb-5 " >
                <div className="container">


                    <div className="row ">

                        <div className="col-lg-6 pt-10">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    {/* <h5>OUR OFFERING</h5> */}
                                    <h2 >Real Time Data Ingestion
                                        for Real Time Analytics</h2>
                                    {/* <h6>Want to perform information / cybersecurity assessment & risk management</h6>
                                    <h5>, THIS IS WHAT YOU CAN EXPECT:</h5> */}
                                </div>

                                <div className="about-me  ">
                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Streaming data</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Complex Event Processes</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Micro batches</p>

                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Event Driven Micro services Integration</p>

                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  CDC (Change Data capture) IOT Data Ingestions</p>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me" style={{ marginRight: "2rem" }}>
                                    <Image style={{ height: "500px", width: "100%" }} src={imgOne} alt="" />

                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </section>



            <section id="sec_data_governance" className="blog-area pt-100 pb-5 " >
                <div className="container">


                    <div className="row ">

                        <div className="col-lg-6">

                            <div className=" mb-5">
                                <div className="about-me" style={{ marginRight: "2rem" }}>
                                    <Image style={{ height: "500px", width: "100%" }} src={imgTwo} alt="" />

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 pt-10">

                            <div className="mb-5">
                                <div className="widget-title-box mb-30">
                                    {/* <span className="animate-border"></span> */}
                                    {/* <h5>OUR OFFERING</h5> */}
                                    <h2 >Data Governance & Data
                                        Observability Platform
                                        setup service</h2>
                                    {/* <h6>Want to perform information / cybersecurity assessment & risk management</h6>
                                    <h5>, THIS IS WHAT YOU CAN EXPECT:</h5> */}
                                </div>

                                <div className="about-me  ">
                                    <p> <i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i> Modern Data Catalogs, Active Meta Data cycles, Data Enrichment, search and Discovery
                                    </p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Data Lineage, schema Lineage, SQL query visual lineage, Impact Analysis</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Async/sync Data Quality Rules in-built with Reverse ETL mechanism
                                    </p>

                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Data Quality Firewall setup across Apps and data warehouses
                                    </p>

                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Data Mesh /Data Fabric data lakes setup</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Secured Data Sharing</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Access Audits in real Time</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Usage patterns,</p>
                                    <p><i className="fa fa-circle" style={{ fontSize: "7px", color: "blue" }}></i>  Real Time Data Anomalies, data drift with AI ML, Root cause Analysis</p>
                                </div>
                            </div>

                        </div>





                    </div>



                </div>
            </section>



        </>
    );
};

export default OfferingSection;
