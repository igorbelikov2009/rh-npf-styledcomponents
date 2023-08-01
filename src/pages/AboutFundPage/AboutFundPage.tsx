import React from "react";
import aboutImage from "../../assets/images/aboutFund/aboutFundTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock/TopBlock";

const AboutFundPage = () => {
  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />
    </>
  );
};

export default AboutFundPage;
