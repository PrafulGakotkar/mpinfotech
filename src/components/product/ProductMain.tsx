import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import BlogSection from './BlogSection';
import SecuritySection from './SecuritySection';
import CloudSection from './CloudSection';
import ChallengeSection from './ChallengeSection';
import ObjectiveSection from './ObjectiveSection';
import ContactForm from '../contact/ContactForm';
import ContactSection from '../home-two/ContactSection';



const BlogMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Our Product'/>
            <BlogSection/>
            <SecuritySection />
            <CloudSection />
            <ChallengeSection />
            <ObjectiveSection />
            <ContactSection />
        </>
    );
};

export default BlogMain;