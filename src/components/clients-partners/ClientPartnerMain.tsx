import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import Clients from './Clients';
import Partners from './Partners';


const ClientPartnerMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Clients Ans Partners'/>
           <Clients />
           <Partners />
           
        </>
    );
};

export default ClientPartnerMain;