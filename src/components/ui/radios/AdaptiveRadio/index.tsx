import React, { FC } from "react";
import { IAdaptiveRadioItem } from "../../../../interfaces/types";
import AdaptiveRadioItem from "../AdaptiveRadioItem";
import { StyledAdaptiveRadio } from "./styles";

interface AdaptiveRadioProps {
  optionsItems: IAdaptiveRadioItem[];
  emitValue: (event: string, id: string) => void;
  currentValue: string;
}

const AdaptiveRadio: FC<AdaptiveRadioProps> = ({ currentValue, emitValue, optionsItems }) => {
  const onChangeRadio = (value: string, id: string) => {
    emitValue(value, id);
  };

  return (
    <StyledAdaptiveRadio>
      {optionsItems.map((item) => (
        <AdaptiveRadioItem
          key={item.id}
          title={item.date}
          id={item.id}
          value={item.value}
          active={item.value === currentValue}
          emitValue={onChangeRadio}
        />
      ))}
    </StyledAdaptiveRadio>
  );
};

export default AdaptiveRadio;
