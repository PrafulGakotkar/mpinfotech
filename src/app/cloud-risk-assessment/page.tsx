import ApplicationRiskAssessmentMain from '@/components/application-risk-assessment/ApplicationRiskAssessmentMain';
import CloudRiskAssessmentMain from '@/components/cloud-risk-assessment/CloudRiskAssessmentMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <CloudRiskAssessmentMain />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;