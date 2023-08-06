import React, { FC, useEffect, useRef, useState } from "react";
import Selector from "../../../ui/select/Selector";
import { investmentTables } from "../../../../data/investData";
import CompositionReservesItem from "../CompositionReservesItem";
import { Heading, Selection, StyledCompositionReserves } from "./styles";

interface CompositionReservesProps {
  isVisible: boolean;
  selectorValue: string;
  idOption: string;
  onClickSelector: () => void;
  emitCoords: (top: number, bottom: number, left: number, width: number) => void;
  emitSelectorBottomLeft: (bottom: number, left: number) => void;
}

const CompositionReserves: FC<CompositionReservesProps> = ({
  isVisible,
  selectorValue,
  idOption,
  onClickSelector,
  emitCoords,
  emitSelectorBottomLeft,
}) => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  // // Получаем данные с сервера
  // const { data: investmentTables } = investmentTablesAPI.useGetInvestmentTablesQuery();

  const selectorRef = useRef<HTMLDivElement>(null);

  const getselectorRefCoords = () => {
    if (selectorRef.current) {
      setTop(selectorRef.current.getBoundingClientRect().top);
      setBottom(selectorRef.current.getBoundingClientRect().bottom);
      setLeft(selectorRef.current.getBoundingClientRect().left);
      setWidth(selectorRef.current.getBoundingClientRect().width);

      emitCoords(top, bottom, left, width);
    }
  };

  useEffect(() => {
    if (selectorRef.current) {
      setBottom(selectorRef.current.getBoundingClientRect().bottom);
      setLeft(selectorRef.current.getBoundingClientRect().left);
      emitSelectorBottomLeft(bottom, left);
    }
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [top]);

  const scrollHandler = () => {
    getselectorRefCoords();
  };

  return (
    <StyledCompositionReserves>
      <Heading>Состав средств пенсионных резервов Фонда</Heading>

      <Selection ref={selectorRef}>
        <Selector isvisible={isVisible} value={selectorValue} onClickSelector={onClickSelector} />
      </Selection>

      {investmentTables &&
        investmentTables.map((arrayOfExpanderTables, index) => (
          <CompositionReservesItem
            key={index}
            arrayOfExpanderTables={arrayOfExpanderTables}
            isVisible={index === Number(idOption)}
          />
        ))}
    </StyledCompositionReserves>
  );
};

export default CompositionReserves;
