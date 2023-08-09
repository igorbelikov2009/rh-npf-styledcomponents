import React, { FC } from "react";
import { CarouselTape } from "./styles";
import { INewsLink } from "../../../../interfaces/types";
import NewsLinkContainer from "../NewsLinkContainer";

interface MainCarouselProps {
  qq: number;
  jj: number;
  carouselLinks: INewsLink[];
  emitWidthColumn: (value: React.SetStateAction<number>) => void;
}

const MainCarousel: FC<MainCarouselProps> = ({ jj, qq, carouselLinks, emitWidthColumn }) => {
  return (
    <CarouselTape>
      {carouselLinks &&
        carouselLinks.map((link, index) => (
          <NewsLinkContainer
            key={index}
            isClear={index === qq || jj === index}
            link={link}
            emitWidthColumn={emitWidthColumn}
          />
        ))}
    </CarouselTape>
  );
};

export default MainCarousel;
