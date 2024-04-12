import { idType } from '@/interFace/interFace';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import CaseDeailsContent from './CaseDeailsContent';
import { casesData } from '@/data/case-data';
import Brand from '../home/Brand';

const CaseDetailsMain = ({id}:idType) => {
    const filerData = casesData.find((item)=>item.id == id)
    return (
        <>
            <Breadcrumb pageTitle='Case Details'/>
            <CaseDeailsContent data={filerData}/>
            <Brand/>
        </>
    );
};

export default CaseDetailsMain;