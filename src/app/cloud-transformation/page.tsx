import CaseOneMain from '@/components/case-1/CaseOneMain';
import CloudTransformationMain from '@/components/cloud-transformation/CloudTransformationMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CloudTransformationPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <CloudTransformationMain />
                </main>
            </Wrapper>
        </>
    );
};

export default CloudTransformationPage;