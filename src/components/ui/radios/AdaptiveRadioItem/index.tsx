import React, { FC } from "react";
import { Input, StyledAdaptiveRadioItem } from "./styles";

interface AdaptiveRadioItemProps {
  value: string;
  id: string;
  title: string;
  active: boolean;
  // emitValue: (event: string, id: string) => void;
  emitValue: (event: any, id: string) => void; // оставить так
}

const AdaptiveRadioItem: FC<AdaptiveRadioItemProps> = ({ active, emitValue, id, title, value }) => {
  const radioHandler = (event: any) => {
    emitValue(event.target.value, id);
  };

  return (
    <StyledAdaptiveRadioItem active={active}>
      {title}
      <Input type="radio" value={value} id={id} onClick={radioHandler} />
    </StyledAdaptiveRadioItem>
  );
};

export default AdaptiveRadioItem;

// Только  onClick={radioHandler}, onChange работает только на одно нажатие.
