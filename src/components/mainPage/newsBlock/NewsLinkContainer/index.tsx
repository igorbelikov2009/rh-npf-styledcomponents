import React, { FC, useEffect, useRef } from "react";
import { INewsLink } from "../../../../interfaces/types";
import NewsLink from "../../../news/NewsLink";
import { Container } from "./styles";

interface NewsLinkContainerProps {
  isClear: boolean;
  link: INewsLink;
  emitWidthColumn: (value: number) => void;
}

const NewsLinkContainer: FC<NewsLinkContainerProps> = ({ isClear, link, emitWidthColumn }) => {
  const refColumn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refColumn.current) {
      emitWidthColumn(refColumn.current.offsetWidth);
    }
  }, [emitWidthColumn]);

  return (
    <Container clear={isClear} ref={refColumn}>
      <NewsLink date={link.date} title={link.title} id={link.id} />
    </Container>
  );
};

export default NewsLinkContainer;
