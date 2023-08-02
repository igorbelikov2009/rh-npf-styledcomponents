import React from "react";
import mainImage from "../../assets/images/main/mainTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock/TopBlock";
import Info from "../../components/mainPage/Info";
import Cards from "../../components/areCommon/cards/Cards/Cards";
import { cardsMainPage } from "../../data/mainPageData";
import ImagesCalculator from "../../components/mainPage/ImagesCalculator";

const MainPage = () => {
  return (
    <>
      <TopBlock
        heading="Уверенность в будущем,"
        headingSpan=" доступная каждому"
        subheading="Обеспечьте себе стабильность и приступайте"
        subheadingSpan=" к реализации своих самых смелых планов!"
        image={mainImage}
      />

      <Info />
      <Cards cards={cardsMainPage} />

      <ImagesCalculator />
    </>
  );
};

export default MainPage;
