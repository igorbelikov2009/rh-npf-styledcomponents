import React from "react";
import newsImage from "../../assets/images/news/newsTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock/TopBlock";

const News = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />
    </>
  );
};

export default News;
