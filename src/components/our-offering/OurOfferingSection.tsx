import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/service/SEO-Consultancy.png";
import imgTwo from "../../../public/assets/img/service/Competitor-Analysis.png";
import imgThree from "../../../public/assets/img/service/Social-Media-Marketing.png";




const OurOfferingSection = () => {
    return (
        <>
            <div className="mt-30 "></div>

            <section className="blog-area pt-40 " >
                <div className="container">


                    <div className="row ">
                        <div className="col-lg-4">

                            <div className=" mb-40 pt-40">
                            <div ><h2 className="offer-img-text">.01</h2></div>
                                <div className="pl-65">
                                    <Image className="offer-img" src={imgOne} alt="" />

                                </div>
                                
                                <div className="mb-10 pr-40 ">

                                    <h5 className="text-center-offer">Starter</h5>
                                    <div className="about-me mb-30 text-center-offer ">
                                        <p className="pl-10 pr-10"> Customers who are considering moving to the cloud, help us consulting, design, build and handover.</p>


                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4">

                            <div className=" mb-40 pt-40">
                            <div ><h2 className="offer-img-text">.02</h2></div>
                                <div className=" pl-65">
                                    <Image className="offer-img " src={imgTwo} alt="" />

                                </div>
                                <div className="mb-40 pr-40 ">

                                    <h5 className="text-center-offer">Hybrid</h5>
                                    <div className="about-me mb-30 text-center-offer ">
                                        <p className="pl-35 pr-35"> Customers who have the on-prem infrastructure and need help to assess the cloud infrastructure readiness to migrate on-premise infrastructure to the cloud, and manage moving forward.</p>
                                    </div>

                                </div>
                            </div>

                        </div>



                        <div className="col-lg-4">

                            <div className=" mb-40 pt-40">
                            <div ><h2 className="offer-img-text">.03</h2></div>
                                <div className=" pl-65">
                                    <Image className="offer-img text-center-offer" src={imgThree} alt="" />

                                </div>
                                <div className="mb-40 pr-40 ">

                                    <h5 className="text-center-offer">Manage</h5>
                                    <div className="about-me mb-30 text-center-offer ">
                                        <p className="pl-10 pr-10"> I am already in the cloud, but I want someone to manage my cloud infrastructure.</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="blog-area pt-10 pb-80 back-img"  >
                <div className="container">


                    <div className="row ">


                        <table id="customers">
                            <tr>
                                <th></th>
                                <th>Assess</th>
                                <th>Plan</th>
                                <th>Build</th>
                                <th>Migrate</th>
                                <th>Validate</th>
                                <th>Manage</th>
                            </tr>
                            <tr>
                                <td>Starter</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Hybrid</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>

                            </tr>
                            <tr>
                                <td>Manage</td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Yes</td>

                            </tr>

                        </table>



                    </div><br/>

                    <div className="row ">
                        <table id="customers">
                            
                            <tr>
                                <th></th>
                                <th style={{textAlign:"center"}}>Starter</th>
                                <th style={{textAlign:"center"}}>Hybrid</th>
                                <th style={{textAlign:"center"}}>Manage</th>
                            </tr>
                            <tr>
                                <td style={{color:"#004FA1"}}><b>Assess</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>System / workload discovery</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Sizing  </td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>TCO  </td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>System / workload discovery  </td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{color:"#004FA1"}}><b>Plan</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Application discovery</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Application dependency visualization</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Cloud Readiness + Suitability Analysis</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Cloud Infrastructure Designer</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Custom Migration Roadmap Builder</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{color:"#004FA1"}}><b>Migrate</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Migration readiness</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Migration plan Import</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Migration Integration</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{color:"#004FA1"}}><b>Validate</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Application dependency visualization</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Connectivity gaps</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Actionable insights</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style={{color:"#004FA1"}}><b>Manage</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Cost management</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                
                            </tr>
                            <tr>
                                <td>Billing analytics</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                
                            </tr>
                            <tr>
                                <td>Instance right sizing</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                
                            </tr>
                            <tr>
                                <td>Reserved instance planner</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                
                            </tr>
                            <tr>
                                <td>Capacity planning</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                
                            </tr>
                            <tr>
                                <td>Account Management</td>
                                <td></td>
                                <td style={{textAlign:"center"}}>x</td>
                                <td style={{textAlign:"center"}}>x</td>
                                
                            </tr>
                           
                        </table>
                    </div>

                </div>
            </section>




        </>
    );
};

export default OurOfferingSection;
