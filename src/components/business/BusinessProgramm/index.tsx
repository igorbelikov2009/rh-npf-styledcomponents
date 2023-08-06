import React from "react";
import { businessCards } from "../../../data/businessPageData";
import DarkIcon from "../../areCommon/icons/DarkIcon";
import {
  CardHeading,
  Cards,
  Container,
  Header,
  Heading,
  IconContainer,
  ProgrammBlock,
  StyledBusinessProgramm,
  Title,
  TitlesContainer,
  TopBlock,
} from "./styles";

const BusinessProgramm = () => {
  return (
    <StyledBusinessProgramm>
      <Container>
        <Header>
          <Heading>Как работает корпоративная пенсионная программа</Heading>
        </Header>

        <ProgrammBlock>
          {businessCards &&
            businessCards.map((card, index) => (
              <Cards key={index}>
                <TopBlock>
                  <IconContainer>
                    <DarkIcon icon={card.icon} />
                  </IconContainer>

                  <CardHeading> {card.header} </CardHeading>
                </TopBlock>

                <TitlesContainer>
                  {card.titles.map((title, index) => (
                    <Title key={index}>{title}</Title>
                  ))}
                </TitlesContainer>
              </Cards>
            ))}
        </ProgrammBlock>
      </Container>
    </StyledBusinessProgramm>
  );
};

export default BusinessProgramm;
