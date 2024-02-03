import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ProjectSection from './ProjectSection';
import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';
import ObjectiveSection from './ObjectiveSection';
import OfferingSection from './OfferingSection';
import CloudSecuritySection from './CloudSecuritySection';

const CyberInformationMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Cyber / Information Security'/>
            <ProjectSection/>
            <ObjectiveSection />
            <OfferingSection />
            <CloudSecuritySection />
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default CyberInformationMain;