import AnalyticsMain from '@/components/analytics/AnalyicsMain';
import AppServiceMain from '@/components/app-service/AppServiceMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <AppServiceMain />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;