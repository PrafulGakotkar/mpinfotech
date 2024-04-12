import ManagementServiceMain from '@/components/management-service/ManagementServiceMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <ManagementServiceMain />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;