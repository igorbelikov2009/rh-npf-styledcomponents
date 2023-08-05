import React, { FC } from "react";
import Arrows from "../Arrows";
import { CarouselSubtitle, CarouselTitle, StyledCarouselHeader, TitlesContainer } from "./styles";

export interface CarouselHeaderProps {
  headerTitle?: string;
  headerSubtitle?: string;
  isHoveredLeft: boolean;
  isBlurredLeft: boolean;
  isHoveredRight: boolean;
  isBlurredRight: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const CarouselHeader: FC<CarouselHeaderProps> = ({
  headerTitle,
  headerSubtitle,
  isBlurredLeft,
  isBlurredRight,
  isHoveredLeft,
  isHoveredRight,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <StyledCarouselHeader>
      <TitlesContainer>
        <CarouselTitle> {headerTitle} </CarouselTitle>
        <CarouselSubtitle> {headerSubtitle} </CarouselSubtitle>
      </TitlesContainer>

      <Arrows
        isBlurredLeft={isBlurredLeft}
        isBlurredRight={isBlurredRight}
        isHoveredLeft={isHoveredLeft}
        isHoveredRight={isHoveredRight}
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
      />
    </StyledCarouselHeader>
  );
};

export default CarouselHeader;
