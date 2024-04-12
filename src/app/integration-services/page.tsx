import IntegrationServicesMain from '@/components/integration-services/IntegrationServicesMain';
import MigrationServicesMain from '@/components/migration-services/MigrationServicesMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const SoftwareDevelopmentPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <IntegrationServicesMain />
                </main>
            </Wrapper>
        </>
    );
};

export default SoftwareDevelopmentPage;