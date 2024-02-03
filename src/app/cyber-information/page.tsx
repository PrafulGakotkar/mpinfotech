import CaseOneMain from '@/components/case-1/CaseOneMain';
import CyberInformationMain from '@/components/cyber-information/CyberInformationMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const Cyberinformationpage = () => {
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

export default Cyberinformationpage;