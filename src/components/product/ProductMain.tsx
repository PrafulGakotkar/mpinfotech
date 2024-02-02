import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import BlogSection from './BlogSection';
import SecuritySection from './SecuritySection';
import CloudSection from './CloudSection';



const BlogMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Our Product'/>
            <BlogSection/>
            <SecuritySection />
            <CloudSection />
        </>
    );
};

export default BlogMain;