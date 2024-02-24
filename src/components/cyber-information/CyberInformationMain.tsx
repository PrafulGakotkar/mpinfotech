import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ProjectSection from './ProjectSection';
import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';
import ObjectiveSection from './ObjectiveSection';
import OfferingSection from './OfferingSection';
import CloudSecuritySection from './CloudSecuritySection';

import InPageNav from './InPageNav';
import Section2 from './itSecurity';
import PenetrationTesting from './PenetrationTesting';



const CyberInformationMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Cyber / Information Security' />
            <InPageNav />
            <div id='section1'> <ProjectSection /> </div>
            <div id='section2'><Section2 /></div>
            <div id='section3'><PenetrationTesting /></div>
            <div id=''><ObjectiveSection /></div>
            <div id='section4'><OfferingSection /></div>
            <div id=''><CloudSecuritySection /></div>
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default CyberInformationMain;