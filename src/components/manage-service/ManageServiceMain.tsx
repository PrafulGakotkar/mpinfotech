import React from 'react';
import LoginArea from '../login/LoginArea';
import Breadcrumb from '@/sheardComponent/Breadcrumb';


const ManageServiceMain = () => {
    return (
        <>
            {/* <h2>our</h2> */}
            <Breadcrumb pageTitle='Manage Service - Cloud Transformation' />
            <section className="blog-area pt-40 " >
                <div className="container">


                    <div className="row ">
                        <p style={{paddingLeft:55}}>Accelerate transformation with our portfolio of secure-by-design cloud solutions. We use proven methodologies to consult, plan, design, migrate, secure, operate, and optimize the infrastructure that runs your critical business applications, enabling you to use the power of the cloud to reduce the time to market and drive efficiency in your organization.</p>


                    </div>
                </div>
            </section>

        </>
    );
};

export default ManageServiceMain;