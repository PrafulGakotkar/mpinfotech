import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';

import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';
import Phase1Section from './Phase1Section';
import Phase2Section from './Phase2Section';
import Phase34Section from './Phase3-4Section';

// import OfferingSection from './OfferingSection';
// import CloudSecuritySection from './CloudSecuritySection';

const CloudTransformationMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Cloud Transformation'/>
            <Phase1Section />
            <Phase2Section />
            <Phase34Section />
            {/* <ObjectiveSection /> */}
            {/* <OfferingSection /> */}
            {/* <CloudSecuritySection /> */}
            {/* <CtaTwo/> */}
            {/* <Brand/> */}
        </>
    );
};

export default CloudTransformationMain;