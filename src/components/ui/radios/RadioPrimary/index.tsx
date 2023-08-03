import React, { FC, useState } from "react";
import { RadioProps } from "../../../../interfaces/types";
import RadioPrimaryItem from "../RadioPrimaryItem";
import { Container, StyledRadioPrimary } from "./styles";

const RadioPrimary: FC<RadioProps> = ({ optionsItems, currentValue, emitValue }) => {
  const [valueRadio, setValueRadio] = useState(currentValue);

  const onChangeRadio = (value: string) => {
    setValueRadio(value);
    emitValue(value);
  };

  return (
    <StyledRadioPrimary>
      <Container>
        {optionsItems.map((item) => (
          <RadioPrimaryItem
            key={item.value}
            title={item.title}
            value={item.value}
            name={item.name}
            active={item.value === valueRadio}
            emitValue={onChangeRadio}
          />
        ))}
      </Container>
    </StyledRadioPrimary>
  );
};

export default RadioPrimary;
