import ApplicationRiskAssessmentMain from '@/components/application-risk-assessment/ApplicationRiskAssessmentMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <ApplicationRiskAssessmentMain />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;