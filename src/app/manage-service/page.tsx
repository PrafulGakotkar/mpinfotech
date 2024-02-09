import ManageServiceMain from "@/components/manage-service/ManageServiceMain";
import PeopleMain from "@/components/people/PeopleMain";
import PriceMain from "@/components/price/PriceMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const manageServicePage = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ManageServiceMain />
        </main>
      </Wrapper>
    </>
  );
};

export default manageServicePage;
