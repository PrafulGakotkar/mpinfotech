import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="contact-info-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                <i className='fas fa-envelope-open'> </i>
                                <h3>Mail Here</h3>
                                <p>info@mpinfotech.com</p>
                                {/* <p>www.infotorun.net</p> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)", paddingBottom:14}}>
                                <i className='fas fa-map-marker-alt'> </i>
                                <h3>Visit Here</h3>
                                <p>4365, US Route-1 South,
                                    Suite 202, Princeton, NJ, 08540</p>
                            </div>
                        </div>
                        <div className="col-xl-3  col-lg-3 col-md-3 ">
                            <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                <i className='fas fa-phone'> </i>
                                <h3>Call Us Now</h3>
                                <p>+1 609 853 0432</p>
                               
                            </div>
                        </div>
                        <div className="col-xl-3  col-lg-3 col-md-3 ">
                            <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                <i className='fas fa-fax'> </i>
                                
                                <h3>Fax Number</h3>
                                <p>609-228-6165</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;