import React, { FC } from "react";
import { Input, StyledAdaptiveRadioItem } from "./styles";

interface AdaptiveRadioItemProps {
  value: string;
  id: string;
  title: string;
  active: boolean;
  emitValue: (event: string, id: string) => void;
}

const AdaptiveRadioItem: FC<AdaptiveRadioItemProps> = ({ active, emitValue, id, title, value }) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value, id);
  };

  return (
    <StyledAdaptiveRadioItem active={active}>
      {title}
      <Input type="radio" value={value} id={id} onChange={radioHandler} />
    </StyledAdaptiveRadioItem>
  );
};

export default AdaptiveRadioItem;
