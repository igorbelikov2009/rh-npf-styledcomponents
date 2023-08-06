import React, { FC } from "react";
import { StyledCarouselRadio } from "./styles";

interface CarouselRadioProps {
  value: string;
  emitValue: (event: string) => void;
}

const CarouselRadio: FC<CarouselRadioProps> = ({ value, emitValue }) => {
  const onChangeCarouselRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <>
      <StyledCarouselRadio type="radio" name="card" value={value} onChange={onChangeCarouselRadio} />
    </>
  );
};

export default CarouselRadio;
