import PeopleMain from "@/components/people/PeopleMain";
import PriceMain from "@/components/price/PriceMain";
import ProcessMain from "@/components/process/ProcessMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const PricePage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ProcessMain />
        </main>
      </Wrapper>
    </>
  );
};

export default PricePage;
