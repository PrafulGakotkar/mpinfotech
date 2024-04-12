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
import CounterDefault1 from '../home/CounterDefault1';
import UniqueMDM from './UniqueMDM';



const CyberInformationMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Data Engineering' />
            {/* <InPageNav /> */}
            <div id=''><ObjectiveSection /></div>
            {/* <div id='section1'> <ProjectSection /> </div> */}
            <div id='section2'><Section2 /></div>
            <CounterDefault1 />
            <div id='data-warehouse-modernization'><PenetrationTesting /></div>
            <div id='section4'><OfferingSection /></div>
            {/* <div id=''><CloudSecuritySection /></div> */}
            <UniqueMDM />
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default CyberInformationMain;