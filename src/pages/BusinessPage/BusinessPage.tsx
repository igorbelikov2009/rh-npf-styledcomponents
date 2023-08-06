import React from "react";
import TopBlock from "../../components/areCommon/TopBlock";
import businessImage from "../../assets/images/businnes/businnesTop.jpg";
import BusinessBlock from "../../components/business/businessBlock/BusinessBlock";
import BusinessProgramm from "../../components/business/BusinessProgramm";
import BusinnesImages from "../../components/business/BusinnesImages";
import BusinnesStatistic from "../../components/business/BusinnesStatistic";
import TaxPreferences from "../../components/business/TaxPreferences";

const BusinessPage = () => {
  return (
    <>
      <TopBlock
        heading="Для бизнеса"
        subheading="Пенсионная программа – современный, эффективный инструмент с уникальным набором опций и льгот, позволяющий влиять на мотивацию  сотрудников и управлять результативностью бизнеса, создавая для компании положительный имидж и характеризуя ее как социально ответственного работодателя."
        image={businessImage}
      />

      <div>
        <BusinessBlock />
        <BusinessProgramm />
        <BusinnesImages />
        <BusinnesStatistic />
        <TaxPreferences />
      </div>
    </>
  );
};

export default BusinessPage;
