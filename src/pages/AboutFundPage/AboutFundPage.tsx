import React from "react";
import aboutImage from "../../assets/images/aboutFund/aboutFundTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock";
import AboutUs from "../../components/aboutFund/AboutUs";
import AboutFundBlock from "../../components/aboutFund/AboutFundBlock";
import Cards from "../../components/areCommon/cards/Cards";
import { aboutFundCards } from "../../data/aboutFundData";

const AboutFundPage = () => {
  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />

      <AboutUs />
      <AboutFundBlock />
      <Cards cards={aboutFundCards} />
    </>
  );
};

export default AboutFundPage;
