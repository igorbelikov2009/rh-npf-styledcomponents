import React, { useState } from "react";
import TripleIcon from "../../areCommon/icons/TripleIcon";
import {
  Block,
  Button,
  Container,
  Description,
  Heading,
  Options,
  Selections,
  Span,
  StyledTaxPreferences,
  Subheading,
  Title,
  Wrapper,
} from "./styles";

const TaxPreferences = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <StyledTaxPreferences>
      <Wrapper>
        <Container>
          <Selections>
            <Button active={isVisible} onClick={() => setVisible(true)}>
              <TripleIcon hovered={isVisible} light={false} icon="Company" />
              <Title>
                Для
                <Span>компании </Span>
              </Title>
            </Button>

            <Button active={!isVisible} onClick={() => setVisible(false)}>
              <TripleIcon hovered={!isVisible} light={false} icon="Users" />
              <Title>
                Для
                <Span>сотрудников</Span>
              </Title>
            </Button>
          </Selections>

          <Options>
            <Heading>Налоговые преференции </Heading>

            {isVisible && (
              <Block>
                <Subheading>Страховые взносы пп. 5 п. 1 ст. 422 НК РФ</Subheading>
                <Description>
                  Пенсионные взносы в пользу работников в рамках пенсионной программы не облагаются страховыми взносами
                  (30% от фонда оплаты труда) в федеральный бюджет: ПФР, ФОМС, ФСС
                </Description>
                <Description></Description>
                <Subheading>Налог на прибыль (20%) пп. 16 п.1 ст. 255 НК РФ</Subheading>
                <Description>
                  Пенсионные взносы работодателя в пользу сотрудников на именные пенсионные счета относятся на расходы
                  по оплате труда в размере до 12% от фонда оплаты труда и уменьшают налогооблагаемую базу по налогу на
                  прибыль.
                </Description>
              </Block>
            )}

            {!isVisible && (
              <Block>
                <Subheading>Социальный налоговый вычет п.4 п.1 ст.219 НК РФ</Subheading>

                <Description>
                  Возможность получить социальный налоговый вычет в размере 13% от суммы уплаченных взносов по личному
                  договору негосударственного пенсионного обеспечения (максимальный размер суммы взносов для получения
                  налогового вычета - 120.000 рублей/год).
                </Description>
              </Block>
            )}
          </Options>
        </Container>
      </Wrapper>
    </StyledTaxPreferences>
  );
};

export default TaxPreferences;
