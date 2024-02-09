import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import Categories from './Categories';
import Courses from './Courses';
import CareersSection from './CareersSection';

const CareerMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Career'/>
            {/* <Categories/> */}
            {/* <Courses/> */}
            <CareersSection />
        </>
    );
};

export default CareerMain;