import React, { FC } from "react";
import ButtonToArchive from "../../ui/buttons/ButtonToArchive/ButtonToArchive";
import { ButtonContainer, Column, Container, Heading, Link, StyledStructureAndRules } from "./styles";

interface StructureAndRulesProps {
  onClickArchiveShareholders: () => void;
  onClickArchivePension: () => void;
}

const StructureAndRules: FC<StructureAndRulesProps> = ({ onClickArchivePension, onClickArchiveShareholders }) => {
  return (
    <StyledStructureAndRules>
      <Container>
        <Column>
          <Heading>Структура и состав акционеров</Heading>

          <Link target="_blank" href="/pdf/infoOpening/Список акционеров фонда.pdf">
            Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд
            (соответствует информации, направленной в Банк России 04.08.2021 г. для размещения на официальном сайте
            Банка России)
          </Link>

          <ButtonContainer onClick={onClickArchiveShareholders}>
            <ButtonToArchive />
          </ButtonContainer>
        </Column>

        <Column>
          <Heading>Пенсионные правила</Heading>

          <Link target="_blank" href="/pdf/infoOpening/пенсионные правила.pdf">
            Пенсионные правила (PDF)
          </Link>

          <ButtonContainer onClick={onClickArchivePension}>
            <ButtonToArchive />
          </ButtonContainer>
        </Column>
      </Container>
    </StyledStructureAndRules>
  );
};

export default StructureAndRules;
