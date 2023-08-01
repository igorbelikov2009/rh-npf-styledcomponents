import React from "react";
import investImage from "../../assets/images/invest/InvestTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock/TopBlock";

const InvestmentPage = () => {
  return (
    <>
      <TopBlock
        heading="Инвестиционная"
        headingSpan="деятельность"
        subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
        image={investImage}
      />
    </>
  );
};

export default InvestmentPage;
