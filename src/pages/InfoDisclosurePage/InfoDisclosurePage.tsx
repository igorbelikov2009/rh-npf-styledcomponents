import React from "react";
import TopBlock from "../../components/areCommon/TopBlock";
import infoImage from "../../assets/images/info/infoTop.jpg";
import GeneralInfo from "../../components/infoDisclosure/GeneralInfo";
import FundPerformance from "../../components/infoDisclosure/fundPerformance/FundPerformance";
import DocumentsOfTitle from "../../components/infoDisclosure/DocumentsOfTitle";
import PortfolioStructure from "../../components/infoDisclosure/PortfolioStructure";
import Notifics from "../../components/infoDisclosure/notifics/Notifics";
import SpecDepository from "../../components/infoDisclosure/specDepository/SpecDepository";

const InfoDisclosurePage = () => {
  return (
    <>
      <TopBlock heading="Раскрытие информации" image={infoImage} />
      <GeneralInfo />
      <FundPerformance />
      <DocumentsOfTitle />

      <PortfolioStructure />

      <SpecDepository />
      <Notifics />
    </>
  );
};

export default InfoDisclosurePage;
