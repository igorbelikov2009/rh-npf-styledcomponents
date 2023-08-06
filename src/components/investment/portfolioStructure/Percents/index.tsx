import React, { FC } from "react";

import {
  Block,
  Container,
  Flex,
  Percents01,
  Percents02,
  Percents03,
  Percents04,
  Percents05,
  Percents06,
  Title,
} from "./styles";

interface PercentProps {
  percent01: string;
  percent02: string;
  percent03: string;
  percent04: string;
  percent05: string;
  percent06: string;
  isVisible?: boolean;
}

const Percents: FC<PercentProps> = ({
  percent01,
  percent02,
  percent03,
  percent04,
  percent05,
  percent06,
  isVisible,
}) => {
  return (
    <>
      {isVisible && (
        <Container>
          <Flex>
            <Block>
              <Percents01> {percent01} </Percents01>
              <Title>Облигации федерального займа</Title>
            </Block>

            <Block>
              <Percents02> {percent02} </Percents02>
              <Title>Облигации хозяйствующих обществ</Title>
            </Block>

            <Block>
              <Percents03> {percent03} </Percents03>
              <Title>Акции</Title>
            </Block>

            <Block>
              <Percents04> {percent04} </Percents04>
              <Title>Субфедеральные и муниципальные облигации</Title>
            </Block>

            <Block>
              <Percents05> {percent05} </Percents05>
              <Title>Депозиты / денежные средства на расчетных счетах</Title>
            </Block>

            <Block>
              <Percents06> {percent06} </Percents06>
              <Title>Открытые паевые инвестиционные фонды</Title>
            </Block>
          </Flex>
        </Container>
      )}
    </>
  );
};

export default Percents;
