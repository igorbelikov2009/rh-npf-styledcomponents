import React, { FC } from "react";
import { RadioLabelProps } from "../../../../interfaces/types";
import { Input, StyledRadioItem, Title } from "./styles";

const RadioPrimaryItem: FC<RadioLabelProps> = ({ value, title, name, active, emitValue }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <StyledRadioItem active={active}>
      <Input type="radio" name={name} value={value} onChange={radioHandler} />

      <Title> {title} </Title>
    </StyledRadioItem>
  );
};

export default RadioPrimaryItem;
