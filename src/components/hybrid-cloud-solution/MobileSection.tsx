import React from "react";
import Image from "next/image";
import imgOne from "../../../public/assets/img/new/secRisk_scope.a961f1ac.png";
import imgSeven from "../../../public/assets/img/new/compliance2.62dffb59.png";

import Link from "next/link";
import CyberAccordion from "./CyberAccordion";


const MobileSection = () => {
    return (
        <>


<section className="blog-area pt-100 pb-35 " >
                <div className="container">
<div className="text-center">
<h2 >CyberSpace Cloud Experience</h2>
<h6>Practical professional services that make businesses more agile, more quickly
</h6>
</div>
                    <div className="row ">
                       
                        <div className="col-lg-6 pt-60">

                           <CyberAccordion />

                        </div>

                        <div className="col-lg-6">

<div className=" mb-5">
    <div className="about-me">
        <Image style={{ height: "80%", width: "70%" }} src={imgSeven} alt="" />

    </div>
</div>

</div>


                    </div>



                </div>
            </section>



        </>
    );
};

export default MobileSection;
