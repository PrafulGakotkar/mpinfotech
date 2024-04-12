import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ProjectSection from '../data-engineering/ProjectSection';
import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';
import ObjectiveSection from '../data-engineering/ObjectiveSection';
import ServicesSection from './ServicesSection';
import CloudSecuritySection from '../data-engineering/CloudSecuritySection';
import MobileSection from './MobileSection';
import LifeCycleSection from './LifeCycleSection';
import Service from './Service';

const SoftwareDevelopmentMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Infrastructure Risk Assessment'/>
           
            {/* <ProjectSection/> */}
            {/* <ObjectiveSection /> */}
            {/* <OfferingSection /> */}
            {/* <CloudSecuritySection /> */}
            <LifeCycleSection />
            <Service />
            <ServicesSection />
            <MobileSection />
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default SoftwareDevelopmentMain;