import React, { FC } from "react";
import { RadioProps } from "../../../../interfaces/types";
import RadioCircleItem from "../RadioCircleItem";
import { Container, StyledRadioCircle } from "./styles";

const RadioCircle: FC<RadioProps> = ({ currentValue, emitValue, optionsItems }) => {
  const onChangeRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <StyledRadioCircle>
      <Container>
        {optionsItems.map((item) => (
          <RadioCircleItem
            key={item.value}
            value={item.value}
            title={item.title}
            active={item.value === currentValue}
            emitValue={onChangeRadio}
          />
        ))}
      </Container>
    </StyledRadioCircle>
  );
};

export default RadioCircle;
