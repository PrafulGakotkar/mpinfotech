import CaseOneMain from '@/components/case-1/CaseOneMain';
import CyberInformationMain from '@/components/cyber-information/CyberInformationMain';
import SoftwareDevelopmentMain from '@/components/software-development/SoftwareDevelopmentMain';
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