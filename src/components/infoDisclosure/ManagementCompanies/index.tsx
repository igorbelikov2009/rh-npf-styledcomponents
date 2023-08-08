import React, { useState } from "react";
import { RadioItemProps } from "../../../interfaces/types";
import RadioPrimary from "../../ui/radios/RadioPrimary";
import { Bold, ButtonContainer, Container, Content, Heading, Paragraph, Small, StyledManagement } from "./styles";

const ManagementCompanies = () => {
  const [currentValue, setCurrentValue] = useState("Contracts operating");
  const optionsItems: RadioItemProps[] = [
    {
      name: "information",
      value: "Contracts operating",
      title: "Действующие",
    },
    {
      name: "information",
      value: "Contracts terminated",
      title: "Договоры прекращены",
    },
  ];
  const onChangePrimaryRadio = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <StyledManagement>
      <Container>
        <Heading>Управляющие компании</Heading>

        <ButtonContainer>
          <RadioPrimary optionsItems={optionsItems} currentValue={currentValue} emitValue={onChangePrimaryRadio} />
        </ButtonContainer>

        <Content>
          {currentValue === "Contracts operating" ? (
            <>
              <Paragraph>
                <Bold>Акционерное общество «Сбер Управление Активами»</Bold>
                <Small>
                  лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными
                  фондами и негосударственными пенсионными фондами № 21-000-1-00010 от 12 сентября 1996 года.
                </Small>
              </Paragraph>

              <Paragraph>
                <Small>Договор №УК-110/2009 заключен 31.07.2009 г., бессрочный, действует.</Small>
              </Paragraph>

              <Paragraph>
                <Small>Договор №УК-117/2009 заключен 07.10.2009 г., бессрочный, действует.</Small>
              </Paragraph>

              <Paragraph>
                <Small>
                  <br />
                </Small>
              </Paragraph>

              <Paragraph>
                <Bold>Акционерное общество «Управляющая компания «ТРАНСФИНГРУП»</Bold>
                <Small>
                  лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными
                  фондами и негосударственными пенсионными фондами № 21–000–1–00052 от 6 ноября 2001 года.
                </Small>
              </Paragraph>

              <Paragraph>
                <Small>Договор № 32/ДУ заключен 17.03.2015 г., бессрочный, действует.</Small>
              </Paragraph>

              <Paragraph>
                <Small>
                  <br />
                </Small>
              </Paragraph>

              <Paragraph>
                <Bold>Акционерное общество «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ»</Bold>
                <Small>
                  лицензия на осуществление деятельности по управлению инвестиционными фондами, <br />
                  паевыми инвестиционными фондами и негосударственными пенсионными фондами, <br />№ 21-000-1-00054 от 3
                  декабря 2001 года.
                </Small>
              </Paragraph>

              <Paragraph>
                <Small>Договор № 250518/1, заключен 25.05.2018г., бессрочный, действует.</Small>
              </Paragraph>

              <Paragraph>
                <Small> Договор № 200220/1, заключен 20.02.2020г., бессрочный, действует.</Small>
              </Paragraph>

              <Paragraph>
                <Small>Договор № 200220/2, заключен 20.02.2020г., бессрочный, действует.</Small>
              </Paragraph>

              <Paragraph>
                <Small>Договор № 311220/1, заключен 31.12.2020г., бессрочный, действует.</Small>
              </Paragraph>
            </>
          ) : (
            <>
              <Paragraph>
                <Bold>
                  Акционерное общество «Сбербанк Управление Активами» (до переименования в ноябре 2012 г. - ЗАО
                  «Управляющая Компания «Тройка Диалог»)
                </Bold>
              </Paragraph>

              <Paragraph>
                <Small>
                  Договор №УК-111/2009 заключен 31.07.2009 г., бессрочный, прекращен 28.02.2013 г. Договор № УК-51/2012
                  заключен 19.12.2012 г., бессрочный, прекращен 31.01.2014 г. Договор №УК-52/2012 заключен 19.12.2012
                  г., бессрочный, прекращен 31.01.2014 г.
                </Small>
              </Paragraph>

              <Paragraph>
                <Small>
                  <br />
                </Small>
              </Paragraph>

              <Paragraph>
                <Bold>ООО «УК «Ренессанс Капитал»</Bold>
                <Small>
                  лицензия № 21-000-1-00587 от 15.11.2008г. на право осуществления деятельности по управлению
                  инвестиционными фондами, паевыми инвестиционными фондами и негосударственными пенсионными фондами,
                  выданная Федеральной службой по финансовым рынкам, срок окончания: лицензия бессрочная. Лицензия №
                  077-09401-001000 от 05.09.2006г., на право осуществления деятельности по управлению ценными бумагами,
                  выданная Федеральной Службой по финансовым рынкам, срок окончания: лицензия бессрочная.
                </Small>
              </Paragraph>

              <Paragraph>
                <Small>
                  Договор № 294/2007, заключен 27.06.2007 г. на срок 2 года, прекращен 31.12.2009 г., Договор №
                  295/2007, заключен 27.06.2007 г. на срок 2 года, прекращен 31.12.2009 г.
                </Small>
              </Paragraph>
            </>
          )}
        </Content>
      </Container>
    </StyledManagement>
  );
};

export default ManagementCompanies;
