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
import CounterDefault1 from '../home/CounterDefault1';

const AnalyticsMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Analytics'/>
           
            {/* <ProjectSection/> */}
            <CounterDefault1 />
            <OfferingSection />
            <Service />
            {/* <MobileSection /> */}
            {/* <CloudSecuritySection /> */}
            <LifeCycleSection />
            {/* <ServicesSection /> */}
            {/* <ObjectiveSection /> */}
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default AnalyticsMain;