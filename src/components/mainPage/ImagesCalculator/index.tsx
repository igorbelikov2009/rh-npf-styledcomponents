import React from "react";
import {
  Attention,
  IconAttention,
  ImagesBlock,
  ImagesContainer,
  ParagraphDescription,
  StyledImages,
  StyledImg,
} from "./styles";

const ImagesCalculator = () => {
  return (
    <StyledImages>
      <ImagesContainer>
        <ImagesBlock>
          <StyledImg src="/images/main/manBackground.jpg" alt="manBackground" />

          <StyledImg src="/images/main/man.png" alt="man" />

          <StyledImg src="/images/main/businessWork.jpg" alt="businessWork" />

          <Attention>
            <IconAttention src="/icons/attention.svg" alt="attention" />

            <ParagraphDescription>
              Калькулятор позволяет произвести ориентировочный расчет будущей пенсии. Не является офертой.
            </ParagraphDescription>
          </Attention>
        </ImagesBlock>
      </ImagesContainer>
    </StyledImages>
  );
};

export default ImagesCalculator;
