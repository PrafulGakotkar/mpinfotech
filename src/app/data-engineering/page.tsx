import CyberInformationMain from '@/components/data-engineering/CyberInformationMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CyberInformationPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <CyberInformationMain />
                </main>
            </Wrapper>
        </>
    );
};

export default CyberInformationPage;