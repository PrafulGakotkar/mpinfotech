import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import OfferingSection from '../data-engineering/OfferingSection';
import OurOfferingSection from './OurOfferingSection';

// import TechnologySection from './TechnologySection';

const OurOfferingMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Our Offering' />
            <OurOfferingSection />
        </>
    );
};

export default OurOfferingMain;