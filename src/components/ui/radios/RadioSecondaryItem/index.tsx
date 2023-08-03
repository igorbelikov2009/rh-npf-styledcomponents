import React, { FC } from "react";
import { Input, StyledRadioItem, Title } from "./styles";
import { RadioLabelProps } from "../../../../interfaces/types";

const RadioSecondaryItem: FC<RadioLabelProps> = ({ value, title, name, active, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <StyledRadioItem active={active}>
      <Input type="radio" value={value} name={name} onChange={radioHandler} />
      <Title> {title} </Title>
    </StyledRadioItem>
  );
};

export default RadioSecondaryItem;
