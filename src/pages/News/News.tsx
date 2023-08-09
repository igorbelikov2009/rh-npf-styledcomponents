import React from "react";
import newsImage from "../../assets/images/news/newsTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock";
import ListNews from "../../components/news/ListNews";

const News = () => {
  return (
    <>
      <TopBlock heading="Новости" image={newsImage} />

      <ListNews />
    </>
  );
};

export default News;
