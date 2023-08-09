import React, { FC } from "react";
import { INews } from "../../../interfaces/types";
import { Container, Date, Heading, Paragraph } from "./styels";

const Article: FC<INews> = ({ id, title, date, paragraphs }) => {
  return (
    <Container>
      <Heading> {title} </Heading>
      <Date> {date} </Date>

      {paragraphs.map((paragraph) => (
        <Paragraph key={paragraph}> {paragraph} </Paragraph>
      ))}
    </Container>
  );
};

export default Article;
