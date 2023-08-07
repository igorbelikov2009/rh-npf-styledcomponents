import React, { useState } from "react";
import { ButtonContainer, Container, Description, Heading, Interactions, StyledSpecDepository } from "./styles";
import { depository1, depository2, optionsItemsSpecDepository } from "../../../../data/infoDisclosureData";
import RadioPrimary from "../../../ui/radios/RadioPrimary";
import SpecDepositoryItem from "../SpecDepositoryItem";

const SpecDepository = () => {
  const [currentValue, setCurrentValue] = useState("Contracts operating");

  const optionsItems = optionsItemsSpecDepository;

  const onChangePrimaryRadio = (value: React.SetStateAction<string>) => {
    setCurrentValue(value);
  };

  return (
    <>
      <StyledSpecDepository>
        <Container>
          <Heading>Специализированный депозитарий</Heading>

          <ButtonContainer>
            <RadioPrimary optionsItems={optionsItems} currentValue={currentValue} emitValue={onChangePrimaryRadio} />
          </ButtonContainer>

          {currentValue === "Contracts operating" ? (
            <SpecDepositoryItem
              subheading={depository1.subheading}
              title={depository1.title}
              subtitle={depository1.subtitle}
            />
          ) : (
            <SpecDepositoryItem
              subheading={depository2.subheading}
              title={depository2.title}
              subtitle={depository2.subtitle}
            />
          )}
        </Container>
      </StyledSpecDepository>

      <Interactions>
        <Container>
          <Description>
            Для информационного взаимодействия АО НПФ «Ренессанс пенсии», являясь участником системы электронного
            документооборота, использует обмен электронными документами в системе электронного документооборота АО ВТБ
            Специализированный депозитарий.
          </Description>
        </Container>
      </Interactions>
    </>
  );
};

export default SpecDepository;
