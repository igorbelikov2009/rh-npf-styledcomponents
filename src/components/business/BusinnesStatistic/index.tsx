import React from "react";
import { cardsBusinnesStatistic } from "../../../data/businessPageData";
import DarkIcon from "../../areCommon/icons/DarkIcon";
import { Card, Container, Heading, IconContainer, StyledBusinnesStatistic, Subheading, Subtitle } from "./styles";

const BusinnesStatistic = () => {
  return (
    <StyledBusinnesStatistic>
      <Heading>
        Для заключения договора негосударственного пенсионного обеспечения вы можете обратиться в офис Фонда. Договор
        будет оформлен на основании пенсионных правил Фонда по пенсионной Схеме 1, с именными пенсионными счетами или
        Схеме 2. С солидарным пенсионным счетом.
      </Heading>

      <Subheading>Преимущества Фонда</Subheading>

      <Container>
        {cardsBusinnesStatistic.map((card, index) => (
          <Card>
            <IconContainer>
              <DarkIcon icon={card.icon} />
            </IconContainer>

            <Subtitle> {card.subtitle} </Subtitle>
          </Card>
        ))}
      </Container>
    </StyledBusinnesStatistic>
  );
};

export default BusinnesStatistic;
