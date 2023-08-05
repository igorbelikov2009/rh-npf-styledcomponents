import React, { FC, useEffect, useRef } from "react";
import { ColumnTitle, Description, Line, StyledColumn } from "./styles";

interface FundCarouselColumnProps {
  clear: boolean;
  title: string;
  description: string;
  emitWidthColumn: (value: number) => void;
}

const FundCarouselColumn: FC<FundCarouselColumnProps> = ({ clear, title, description, emitWidthColumn }) => {
  const refColumn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refColumn.current) {
      emitWidthColumn(refColumn.current.offsetWidth);
    }
  }, [emitWidthColumn]);

  return (
    <StyledColumn clear={clear} ref={refColumn}>
      <ColumnTitle> {title} </ColumnTitle>

      <Line />

      <Description> {description} </Description>
    </StyledColumn>
  );
};

export default FundCarouselColumn;
