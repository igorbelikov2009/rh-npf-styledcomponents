import React from "react";
import { Container, Heading, Paragraph, ParagraphBefore, StyledIncome } from "./styles";

const IncomeChangeRegulation = () => {
  return (
    <StyledIncome>
      <Container>
        <Heading>
          <br />
          Положение о возможности увеличения или уменьшения дохода
        </Heading>
        <Paragraph>Просим вас обратить внимание на следующее:</Paragraph>

        <ParagraphBefore>доход от размещения пенсионных резервов может увеличиваться или уменьшаться;</ParagraphBefore>

        <ParagraphBefore>результаты инвестирования в прошлом не определяют доходов в будущем;</ParagraphBefore>

        <ParagraphBefore>государство не гарантирует доходности размещения средств пенсионных резервов.</ParagraphBefore>
      </Container>
    </StyledIncome>
  );
};

export default IncomeChangeRegulation;
