import React, { FC, useEffect, useRef, useState } from "react";
import Selector from "../../../ui/select/Selector";
import Graph from "../Graph";
import { investPercent } from "../../../../data/investData";
import Percents from "../Percents";
import { Content, Heading, SelectorContainer, StyledPortfolioStructure } from "./styles";

interface PortfolioStructureProps {
  isvisible: boolean;
  selectorValue: string;
  idOption: string;
  onClickSelector: () => void;
  emitCoords: (top: number, bottom: number, left: number, width: number) => void;
  emitSelectorBottomLeft: (bottom: number, left: number) => void;
}

const PortfolioStructure: FC<PortfolioStructureProps> = ({
  isvisible,
  idOption,
  selectorValue,
  onClickSelector,
  emitCoords,
  emitSelectorBottomLeft,
}) => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  const selectorRef = useRef<HTMLDivElement>(null);

  const getSelectControllerCoords = () => {
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
    getSelectControllerCoords();
  };

  return (
    <StyledPortfolioStructure>
      <Heading>Структура портфеля</Heading>

      <SelectorContainer ref={selectorRef}>
        <Selector isvisible={isvisible} value={selectorValue} onClickSelector={onClickSelector} />
      </SelectorContainer>

      <Content>
        <Graph />

        {investPercent &&
          investPercent.map((item, index) => (
            <Percents
              key={index}
              percent01={item.percent01}
              percent02={item.percent02}
              percent03={item.percent03}
              percent04={item.percent04}
              percent05={item.percent05}
              percent06={item.percent06}
              isVisible={Number(idOption) === index}
            />
          ))}
      </Content>
    </StyledPortfolioStructure>
  );
};

export default PortfolioStructure;
