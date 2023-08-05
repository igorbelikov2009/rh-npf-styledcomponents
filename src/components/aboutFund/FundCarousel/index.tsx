import React, { FC } from "react";
import { IColumn } from "../../../interfaces/types";
import FundCarouselColumn from "../FundCarouselColumn";
import { StyledFundCarousel } from "./styles";

interface FundCarouselProps {
  qq: number;
  jj: number;
  columns: IColumn[] | undefined;
  emitWidthColumn: (value: number) => void;
}

const FundCarousel: FC<FundCarouselProps> = ({ jj, qq, columns, emitWidthColumn }) => {
  const getWidthColumn = (widthColumn: number) => {
    emitWidthColumn(widthColumn);
  };

  return (
    <StyledFundCarousel>
      {columns &&
        columns.map((column, index) => (
          <FundCarouselColumn
            key={index}
            description={column.description}
            title={column.title}
            emitWidthColumn={getWidthColumn}
            clear={index === qq || index === jj}
          />
        ))}
    </StyledFundCarousel>
  );
};

export default FundCarousel;
