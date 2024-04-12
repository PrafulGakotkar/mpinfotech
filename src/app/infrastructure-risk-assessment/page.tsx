import SoftwareDevelopmentMain from '@/components/infrastructure-risk-assessment/SoftwareDevelopmentMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <SoftwareDevelopmentMain />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;