import React, { useState } from "react";
import TripleIcon from "../../components/areCommon/icons/TripleIcon";
import { Container, IconContainer, LinkTitle, StyledLink, StyledNewsPage } from "./styles";
import { useParams } from "react-router-dom";
import { INews } from "../../interfaces/types";
import useDate from "../../api/useDate/useDate";
import Article from "../../components/newsPage/Article";
import NewsLink from "../../components/news/NewsLink";
import { newsAPI } from "../../store/services/newsAPI";
import ServerIsLoading from "../../components/areCommon/ServerIsLoading";
import ServerError from "../../components/areCommon/ServerError";

const NewsPage = () => {
  const { id } = useParams();
  const prevID = Number(id) - 1;
  const nextID = Number(id) + 1;

  const [isHovered, setHovered] = useState(false);

  // // Получаем данные с newsReducer,
  const { data, isLoading, isError } = newsAPI.useGetNewsQuery();
  let news: INews[] = [];
  if (data) {
    news = data;
  }

  // const { news, isLoading, error } =

  // Фильтруем массив всех отсортированных новостей, с упорядоченным id, с отформатированной датой
  // Оставляем в массиве только те новости, ID которых соответствуют prevID и nextID.
  const anotherNews = [...news].filter((item) => {
    return item.id === prevID || item.id === nextID;
  });

  // Форматируем дату других новостей:
  const formatedAnotherNews: INews[] = [...anotherNews].map((item) => ({
    id: Number(item.id),
    title: String(item.title),
    date: String(useDate.format(new Date(item.date))),
    paragraphs: item.paragraphs,
  }));

  // Оставляем в массиве только те новости, ID которых соответствуют id.
  const currentNews = [...news].filter((item) => {
    return item.id === Number(id);
  });

  // форматируем дату текущих новостей:
  const formatedCurrentNews: INews[] = [...currentNews].map((item) => ({
    id: Number(item.id),
    title: String(item.title),
    date: String(useDate.format(new Date(item.date))),
    paragraphs: item.paragraphs,
  }));

  return (
    <StyledNewsPage>
      <Container>
        <StyledLink to="/news" onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
          <IconContainer>
            <TripleIcon hovered={isHovered} light={false} icon="Arrow Down" />
          </IconContainer>

          <LinkTitle>К списку новостей</LinkTitle>
        </StyledLink>

        {isLoading && <ServerIsLoading />}
        {isError && <ServerError />}

        <>
          {formatedCurrentNews ? (
            formatedCurrentNews.map((item) => (
              <Article key={item.id} id={item.id} date={item.date} title={item.date} paragraphs={item.paragraphs} />
            ))
          ) : (
            <p> Новости с ID {id} не найдено</p>
          )}

          {formatedAnotherNews &&
            formatedAnotherNews.map((item) => (
              <NewsLink key={item.id} date={item.date} title={item.title} id={Number(item.id)} />
            ))}
        </>
      </Container>
    </StyledNewsPage>
  );
};

export default NewsPage;
