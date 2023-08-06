import React, { FC, useEffect } from "react";
import { cardsBusinessCarousel } from "../../../../data/businessPageData";
import CarouselCard from "../CarouselCard";
import { StyledBusinessCarousel } from "./styles";

interface BusinessCarouselProps {
  currentValue: number;
  emitAmountChildren: (value: number) => void;
  emitValue: (value: string) => void;
}

const BusinessCarousel: FC<BusinessCarouselProps> = ({ currentValue, emitAmountChildren, emitValue }) => {
  useEffect(() => {
    emitAmountChildren(cardsBusinessCarousel.length);
  }, [emitAmountChildren]);

  const onChangeCarouselRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <StyledBusinessCarousel>
      {cardsBusinessCarousel.map((card, index) => (
        <CarouselCard
          key={index}
          icon={card.icon}
          title={card.title}
          value={card.value}
          emitValue={onChangeCarouselRadio}
          isActive={index === currentValue}
        />
      ))}
    </StyledBusinessCarousel>
  );
};

export default BusinessCarousel;
