import CareerDetailsMain from '@/components/career-details/CareerDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CareerPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <CareerDetailsMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default CareerPage;