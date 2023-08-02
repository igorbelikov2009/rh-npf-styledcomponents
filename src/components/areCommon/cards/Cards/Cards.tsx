import React, { FC } from "react";
import { ICard } from "../../../../interfaces/types";
import CardItem from "../CardItem/CardItem";
import { CardsContainer, CardsHeading, StyledCards } from "./styles";

interface CardProps {
  cards: ICard[];
}

const Cards: FC<CardProps> = ({ cards }) => {
  return (
    <CardsContainer>
      <CardsHeading> Фонд в цифрах </CardsHeading>

      <StyledCards>
        {cards.map((card) => (
          <CardItem key={card.icon} icon={card.icon} title={card.title} span={card.span} subtitle={card.subtitle} />
        ))}
      </StyledCards>
    </CardsContainer>
  );
};

export default Cards;
