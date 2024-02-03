import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ProjectSection from '../cyber-information/ProjectSection';
import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';
import ObjectiveSection from '../cyber-information/ObjectiveSection';
import ServicesSection from './ServicesSection';
import CloudSecuritySection from '../cyber-information/CloudSecuritySection';
import MobileSection from './MobileSection';
import LifeCycleSection from './LifeCycleSection';

const SoftwareDevelopmentMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Software Development'/>
           
            {/* <ProjectSection/> */}
            {/* <ObjectiveSection /> */}
            {/* <OfferingSection /> */}
            {/* <CloudSecuritySection /> */}
            <ServicesSection />
            <MobileSection />
            <LifeCycleSection />
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default SoftwareDevelopmentMain;