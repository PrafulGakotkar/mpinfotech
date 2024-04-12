import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="contact-info-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact  mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                {/* <i className='fas fa-envelope-open'> </i> */}
                                <h3 className='text-center'>US Office</h3>
                                {/* <i className='fa-light fa-location-dot'> </i> */}
                                <p><i className='fas fa-map-marker-alt' > </i>Cyber Space Technologies LLC.,2015 RT 27 South, Suite#234,
                                    Edison, NJ 08817. <br /> 4300 Punjab Way, STE 280, Frisco, TX 75033</p>

                                <p> <i className='fas fa-phone'> </i> +1 732-515-9299</p>
                                <p> <i className='fas fa-envelope-open'> </i> support@cyspacetech.com</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact  mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                {/* <i className='fas fa-envelope-open'> </i> */}
                                <h3 className='text-center'>UK Office</h3>

                                <p><i className='fas fa-map-marker-alt' > </i> Cyber Space Technologies
                                    71-75 Shelton Street, Covent Garden,
                                    London, United Kingdom, WC2H 9JQ</p>

                                <p> <i className='fas fa-phone'> </i> +44 7770695162</p>
                                <p> <i className='fas fa-envelope-open'> </i> service@cyspacetech.com</p><br/>
                            </div>
                        </div>


                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact  mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                {/* <i className='fas fa-envelope-open'> </i> */}
                                <h3 className='text-center'>INDIA Office</h3>
                                {/* <i className='fa-light fa-location-dot'> </i> */}
                                <p><i className='fas fa-map-marker-alt' > </i> Cyber Space Technologies Pvt. Ltd.,
                                    302, Block -2, Meghana estate ,
                                    Arunodaya Colony, Madhapur,
                                    Hyderabad, Telangana- 500081</p>

                                <p> <i className='fas fa-phone'> </i> +91 8801152116</p>
                                <p> <i className='fas fa-envelope-open'> </i> service@cyspacetech.com</p><br/>
                            </div>
                        </div>



                        {/* <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)", paddingBottom:14}}>
                                <i className='fas fa-map-marker-alt'> </i>
                                <h3>Visit Here</h3>
                                <p>4365, US Route-1 South,
                                    Suite 202, Princeton, NJ, 08540</p>
                            </div>
                        </div> */}
                        {/* <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                <i className='fas fa-map-marker-alt'> </i>
                                <i className='fas fa-phone'> </i>
                                <h3>Call Us Now</h3>
                                <p>+1 609 853 0432</p>

                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                <i className='fas fa-map-marker-alt'> </i>
                                {/* <i className='fas fa-fax'> </i> */}

                        {/*<h3>Fax Number</h3>
                                <p>609-228-6165</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;