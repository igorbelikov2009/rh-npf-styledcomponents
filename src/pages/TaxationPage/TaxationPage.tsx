import React from "react";
import taxationImage from "../../assets/images/taxation/taxationTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock/TopBlock";

const TaxationPage = () => {
  return (
    <>
      <TopBlock
        heading="Налогооблажение"
        subheading="Порядок налогообложения при выплате пенсий и выкупных сумм"
        image={taxationImage}
      />
    </>
  );
};

export default TaxationPage;
