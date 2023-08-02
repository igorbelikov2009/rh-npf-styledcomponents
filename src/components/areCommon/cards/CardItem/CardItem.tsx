import React, { FC } from "react";
import { ICard } from "../../../../interfaces/types";
import DarkIcon from "../../icons/DarkIcon";
import { CardItems, CardSubtitle, CardTitle, CardTitleSpan, ContainerIcon, Description } from "./styles";

const CardItem: FC<ICard> = ({ icon, subtitle, span, title }) => {
  return (
    <CardItems>
      <ContainerIcon>
        <DarkIcon icon={icon} />
      </ContainerIcon>

      <Description>
        <CardTitle>
          {title}
          <CardTitleSpan> {span} </CardTitleSpan>
        </CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </Description>
    </CardItems>
  );
};

export default CardItem;
