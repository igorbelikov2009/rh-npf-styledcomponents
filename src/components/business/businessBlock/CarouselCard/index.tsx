import React, { FC, useState } from "react";
import CarouselRadio from "../CarouselRadio";
import TripleIcon from "../../../areCommon/icons/TripleIcon";
import { IconContainer, StyledCarouselCard, Title } from "./styles";

interface CarouselCardProps {
  isActive: boolean;
  value: string;
  icon: string;
  title: string;
  emitValue: (value: string) => void;
}

const CarouselCard: FC<CarouselCardProps> = ({ emitValue, icon, isActive, title, value }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handlerRadio = (value: string) => {
    emitValue(value);
  };

  return (
    <StyledCarouselCard onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} active={isActive}>
      <CarouselRadio value={value} emitValue={handlerRadio} />

      <IconContainer>
        <TripleIcon hovered={isHovered} icon={icon} light={false} />
      </IconContainer>

      <Title> {title} </Title>
    </StyledCarouselCard>
  );
};

export default CarouselCard;
