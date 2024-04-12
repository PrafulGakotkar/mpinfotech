import AnalyticsMain from '@/components/analytics/AnalyicsMain';
import AppServiceMain from '@/components/app-service/AppServiceMain';
import ItServiceMain from '@/components/it-service/ItServiceMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <ItServiceMain />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;