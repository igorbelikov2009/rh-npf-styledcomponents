import React, { FC, useState } from "react";
import { RadioProps } from "../../../../interfaces/types";
import RadioSecondaryItem from "../RadioSecondaryItem";
import { StyledRadioSecondary } from "./styles";

const RadioSecondary: FC<RadioProps> = ({ optionsItems, emitValue, currentValue }) => {
  const [valueRadio, setValueRadio] = useState<string>(currentValue);

  const onChangeRadio = (value: string) => {
    setValueRadio(value);
    emitValue(value);
  };

  return (
    <StyledRadioSecondary>
      {optionsItems.map((item) => (
        <RadioSecondaryItem
          key={item.value}
          title={item.title}
          value={item.value}
          name={item.name}
          active={item.value === valueRadio}
          emitValue={onChangeRadio}
        />
      ))}
    </StyledRadioSecondary>
  );
};

export default RadioSecondary;
