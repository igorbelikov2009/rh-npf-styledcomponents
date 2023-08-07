import React, { useState } from "react";
import { RadioItemProps } from "../../../interfaces/types";
import RadioPrimary from "../../ui/radios/RadioPrimary";
import { ButtonContainer, Container, Heading, Paragraph, Span, StyledGeneralInfo } from "./styles";

const GeneralInfo = () => {
  const [currentValue, setCurrentValue] = useState("information");

  const optionsItems: RadioItemProps[] = [
    { name: "information", title: "Сведения", value: "information" },
    { name: "information", title: "Реквизиты", value: "requisites" },
  ];

  const onChangePrimaryRadio = (value: React.SetStateAction<string>) => {
    setCurrentValue(value);
  };

  return (
    <StyledGeneralInfo>
      <Container>
        <Heading>Общие сведения</Heading>

        <ButtonContainer>
          <RadioPrimary currentValue={currentValue} optionsItems={optionsItems} emitValue={onChangePrimaryRadio} />
        </ButtonContainer>

        {currentValue === "information" ? (
          <div>
            <Paragraph>
              <Span>Полное фирменное наименование Фонда на русском языке</Span>
              Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»
            </Paragraph>

            <Paragraph>
              <Span>Сокращенное фирменное наименование Фонда на русском языке</Span>
              АО НПФ «Ренессанс пенсии»
            </Paragraph>

            <Paragraph>
              <Span>Полное фирменное наименование Фонда на английском языке</Span>
              Joint Stock Company Non-State Pension Fund Renaissance pensions
            </Paragraph>

            <Paragraph>
              <Span>Сокращенное фирменное наименование Фонда на английском языке</Span>
              JSC NSPF Renaissance pensions
            </Paragraph>

            <Paragraph>
              <Span>Лицензия</Span>
              Лицензия на осуществление деятельности по пенсионному обеспечению и пенсионному страхованию <br />№ 383/2
              от 16 июня 2009 года *
            </Paragraph>

            <Paragraph>
              <Span>Адрес места нахождения Фонда. Почтовый (контактный) адрес</Span>
              115114, г. Москва, Дербеневская наб., д. 7, стр. 22
            </Paragraph>

            <Paragraph>
              <Span>Обособленные подразделения</Span>
              Нет
            </Paragraph>

            <Paragraph>
              <Span>Фонд не работает с агентами</Span>
            </Paragraph>

            <Paragraph>
              <Span>
                *Фонд вправе осуществлять деятельность по обязательному пенсионному страхованию после регистрации
                страховых правил в Банке России и вступлении в систему гарантирования прав застрахованных лиц.
              </Span>
            </Paragraph>
          </div>
        ) : (
          <div>
            <Paragraph>
              <Span>Полное наименование Фонда на русском языке</Span>
              Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»
            </Paragraph>

            <Paragraph>
              <Span>Юридический адрес</Span>
              115114, г. Москва, Дербеневская наб., д. 7, стр. 22
            </Paragraph>

            <Paragraph>
              <Span>Почтовый (контактный) адрес</Span>
              115114, г. Москва, Дербеневская наб., д. 7, стр. 22
            </Paragraph>

            <Paragraph>
              <Span>Идентификационный номер (ИНН/КПП)</Span>
              9725000621 / 772501001
            </Paragraph>

            <Paragraph>
              <Span>ОГРН</Span>
              1187700021948
            </Paragraph>

            <Paragraph>
              <Span>Код по ОКПО</Span>
              34981417
            </Paragraph>

            <Paragraph>
              <Span>ОКТМО</Span>
              45914000000 – муниципальный округ Даниловский
            </Paragraph>

            <Paragraph>
              <Span>ОКОП</Span>
              12267
            </Paragraph>

            <Paragraph>
              <Span>Полное наименование банка</Span>
              Банк ВТБ (ПАО)
            </Paragraph>

            <Paragraph>
              <Span>Расчетный счет (пенсионные резервы)</Span>
              40701810726800000147
            </Paragraph>

            <Paragraph>
              <Span>Расчетный счет (собственные средства)</Span>
              40701810026800000148
            </Paragraph>
          </div>
        )}
      </Container>
    </StyledGeneralInfo>
  );
};

export default GeneralInfo;
