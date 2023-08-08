import React, { FC, useState } from "react";
import { Container, CurrentValue, Input, StyledSlider, Title } from "./styles";

export interface ISlider {
  title: string;
  name: string;
  min: string;
  max: string;
  step: string;
  value: string;
  emitValue: (event: string) => void;
}

const Slider: FC<ISlider> = ({ emitValue, max, min, step, value, name, title }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handlerSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    emitValue(event.target.value);
  };

  return (
    <StyledSlider>
      <Container>
        <Title> {title} </Title>
        <CurrentValue> {currentValue} </CurrentValue>
      </Container>

      <Input type="range" name={name} min={min} max={max} step={step} value={currentValue} onChange={handlerSlider} />
    </StyledSlider>
  );
};

export default Slider;
