import React, { FC } from "react";
import { INewsLink } from "../../../interfaces/types";
import { Container, Date, StyledLink } from "./styles";

const NewsLink: FC<INewsLink> = ({ title, date, id }) => {
  return (
    <Container>
      <StyledLink to={`/news/${id}`}>{title}</StyledLink>

      <Date> {date} </Date>
    </Container>
  );
};

export default NewsLink;
