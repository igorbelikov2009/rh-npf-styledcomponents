import React from "react";
import mainImage from "../../assets/images/main/mainTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock/TopBlock";
import Info from "../../components/mainPage/Info";

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
    </>
  );
};

export default MainPage;
