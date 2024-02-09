import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import PrivacyMain from '@/components/privacy/PrivacyMain';

const PrivacyPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <PrivacyMain />
                </main>
            </Wrapper>
        </>
    );
};

export default PrivacyPage;