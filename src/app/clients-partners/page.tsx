import ClientPartnerMain from '@/components/clients-partners/ClientPartnerMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ClientsPartnersPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    {/* <CaseOneMain/> */}
                    <ClientPartnerMain />
                </main>
            </Wrapper>
        </>
    );
};

export default ClientsPartnersPage;