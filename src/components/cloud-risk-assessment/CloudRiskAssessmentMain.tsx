import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ProjectSection from '../data-engineering/ProjectSection';
import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';
import ServicesSection from './ServicesSection';
import CloudSecuritySection from '../data-engineering/CloudSecuritySection';
import MobileSection from './MobileSection';
import LifeCycleSection from './LifeCycleSection';
import Service from './Service';
import ObjectiveSection from './ObjectiveSection';
import OfferingSection from './OfferingSection';

const CloudRiskAssessmentMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Cloud Risk Assessment'/>
           
            {/* <ProjectSection/> */}
            {/* <ObjectiveSection /> */}
            <OfferingSection />
            {/* <CloudSecuritySection /> */}
            {/* <LifeCycleSection /> */}
            <Service />
            <ServicesSection />
            {/* <MobileSection /> */}
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default CloudRiskAssessmentMain;