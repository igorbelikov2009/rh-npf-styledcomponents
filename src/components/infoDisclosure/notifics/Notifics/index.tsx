import React, { useState } from "react";
import { ButtonContainer, Container, Content, Heading, StyledNotifics } from "./styles";
import { INotificsContent, RadioItemProps } from "../../../../interfaces/types";
import { contentsNotifics } from "../../../../data/infoDisclosureData";
import useDate from "../../../../api/useDate/useDate";
import RadioCircle from "../../../ui/radios/RadioCircle";
import NotificsContent from "../NotificsContent";

const Notifics = () => {
  const [currentValue, setCurrentValue] = useState("0");

  const formattedContents: INotificsContent[] = contentsNotifics.map((item) => ({
    date: String(useDate.format(new Date(item.date))),
    description: String(item.description),
  }));

  const optionsItems: RadioItemProps[] = contentsNotifics
    .map((item) => new Date(item.date).getFullYear())
    .map((item, index) => ({
      title: String(item),
      value: String(index),
    }));

  const onChangeRadio = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <StyledNotifics>
      <Container>
        <Heading>Уведомления</Heading>

        <ButtonContainer>
          <RadioCircle currentValue={currentValue} optionsItems={optionsItems} emitValue={onChangeRadio} />
        </ButtonContainer>

        <Content>
          {formattedContents.map((content, index) => (
            <NotificsContent key={index} content={content} isVisible={Number(currentValue) === index} />
          ))}
        </Content>
      </Container>
    </StyledNotifics>
  );
};

export default Notifics;
