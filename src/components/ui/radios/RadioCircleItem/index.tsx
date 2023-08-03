import React, { FC } from "react";
import { RadioLabelProps } from "../../../../interfaces/types";
import { Input, StyledRadioCircleItem, Title } from "./styles";

const RadioCircleItem: FC<RadioLabelProps> = ({ active, emitValue, title, value, name }) => {
  const handlerRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <StyledRadioCircleItem active={active}>
      <Input type="radio" name="content" value={value} onChange={handlerRadio} />
      <Title active={active}> {title} </Title>
    </StyledRadioCircleItem>
  );
};

export default RadioCircleItem;
