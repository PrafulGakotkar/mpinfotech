import React from 'react';
import LoginArea from '../login/LoginArea';
import Breadcrumb from '@/sheardComponent/Breadcrumb';


const ProcessMain = () => {
    return (
        <>
            {/* <h2>our</h2> */}
            <Breadcrumb pageTitle='Process' />
            <section className="blog-area pt-40 " >
                <div className="container">


                    <div className="row ">
                        <p style={{paddingLeft:55}}>We follow “security-first” approach, and have implemented industry best practices with security from ground up there by building and managing secure and reliable cloud infrastructures.

                        </p>


                    </div>
                </div>
            </section>

        </>
    );
};

export default ProcessMain;