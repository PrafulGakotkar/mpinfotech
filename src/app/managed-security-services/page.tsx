import ApplicationRiskAssessmentMain from '@/components/application-risk-assessment/ApplicationRiskAssessmentMain';
import CloudRiskAssessmentMain from '@/components/cloud-risk-assessment/CloudRiskAssessmentMain';
import ManagedSecurityServices from '@/components/managed-security-services/CloudRiskAssessmentMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <ManagedSecurityServices />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;