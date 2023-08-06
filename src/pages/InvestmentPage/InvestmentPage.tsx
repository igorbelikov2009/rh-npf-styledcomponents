/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import investImage from "../../assets/images/invest/InvestTop.jpg";
import TopBlock from "../../components/areCommon/TopBlock";
import PortfolioStructure from "../../components/investment/portfolioStructure/PortfolioStructure";
import { IOptionItem } from "../../interfaces/types";
import { investmentOptions } from "../../data/investData";
import useDate from "../../api/useDate/useDate";
import { styled } from "styled-components";
import OptionsBlock from "../../components/ui/select/OptionsBlock";

export const ContainerOptionBlock = styled.div<{ firstvisible: boolean }>`
  max-width: 382px;
  border-radius: 6px;
  position: fixed;
  margin: 0 auto;
  transition: opacity 0.28s ease;
  // если сделать transition: all 0.28s ease;,
  // то этот блок будет дёргаться при скроле

  @media screen and (min-width: 576px) {
    max-width: 210px;
  }

  @media screen and (min-width: 768px) {
    max-width: 210px;
    margin: 0;
  }

  visibility: ${({ firstvisible }) => (firstvisible ? "visible" : "hidden")};
  opacity: ${({ firstvisible }) => (firstvisible ? "1" : "0")};
`;

const InvestmentPage = () => {
  const [clientHeight, setClientHeight] = useState(0);

  // firstSelector
  const [firstCurrentValue, setFirstCurrentValue] = useState("30 ноября 2021 г.");
  const [, setFirstSelectorTop] = useState(0);
  const [firstSelectorBottom, setFirstSelectorBottom] = useState(0);
  const [firstSelectorLeft, setFirstSelectorLeft] = useState(0);
  const [firstSelectorWidth, setFirstSelectorWidth] = useState(0);

  // firstOptionsBlock
  const [firstBlockIdOption, setFirstBlockIdOption] = useState("0");
  const [firstBlockHeight, setFirstBlockHeight] = useState(0);
  const [firstBlockTop, setFirstBlockTop] = useState(0);
  const [firstBlockVisible, setFirstBlockVisible] = useState(false);

  // secondSelector
  const [secondCurrentValue, setSecondCurrentValue] = useState("30 ноября 2021 г.");
  const [, setSecondSelectorTop] = useState(0);
  const [secondSelectorBottom, setSecondSelectorBottom] = useState(0);
  const [secondSelectorLeft, setSecondSelectorLeft] = useState(0);
  const [secondSelectorWidth, setSecondSelectorWidth] = useState(0);

  // secondOptionsBlock secondBlock
  const [secondBlockIdOption, setSecondBlockIdOption] = useState("0");
  const [secondBlockHeight, setSecondBlockHeight] = useState(0);
  const [secondBlockTop, setSecondBlockTop] = useState(0);
  const [secondBlockVisible, setSecondBlockVisible] = useState(false);

  // Получаем данные с сервера
  // const { data: investmentCards, isLoading, isError } = investmentCardsAPI.useGetInvestmentCardsQuery();
  // const { data: investmentOptions } = investmentOptionsAPI.useGetInvestmentOptionsQuery();

  let formattedOptionsItems: IOptionItem[] = [];
  if (investmentOptions) {
    formattedOptionsItems = investmentOptions.map((item) => ({
      date: String(useDate.format(new Date(item.date))),
      value: String(useDate.format(new Date(item.date))),
      id: String(item.id),
    }));
  }

  const refFirstSelectBlock = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  // вызов функции получения высоты блоков опций OptionsBLock при скроллинге
  const scrollHandler = (event: any) => {
    getOptionsBlockHeight();
  };

  // Получаем значения bottom и left (selectController) из компонента PortfolioStructure.tsx
  // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
  const getFirstSelectorBottomLeft = (bottom: React.SetStateAction<number>, left: React.SetStateAction<number>) => {
    setFirstSelectorBottom(bottom);
    setFirstSelectorLeft(left);
  };

  // Получаем значения bottom и left (selectController) из компонента CompositionReserves.tsx
  // Они нужны для первичного установления координат при useEffect, до вызова scrollHandler
  const getSecondSelectorBottomLeft = (bottom: React.SetStateAction<number>, left: React.SetStateAction<number>) => {
    setSecondSelectorBottom(bottom);
    setSecondSelectorLeft(left);
  };

  // useEffect для первых first Controller и OptionsBlock
  useEffect(() => {
    setFirstBlockTop(firstSelectorBottom);
    if (firstSelectorBottom <= 0) {
      setFirstBlockTop(0);
    } else if (firstSelectorBottom >= clientHeight - firstBlockHeight && firstSelectorBottom <= clientHeight) {
      setFirstBlockTop(firstSelectorBottom - firstBlockHeight);
    } else if (firstSelectorBottom >= clientHeight) {
      setFirstBlockTop(clientHeight - firstBlockHeight);
    }
  }, [clientHeight, firstBlockHeight, firstSelectorBottom]);

  // useEffect для вторых second Controller и OptionsBlock
  useEffect(() => {
    setSecondBlockTop(secondSelectorBottom);
    if (secondSelectorBottom <= 0) {
      setSecondBlockTop(0);
    } else if (secondSelectorBottom >= clientHeight - secondBlockHeight && secondSelectorBottom <= clientHeight) {
      setSecondBlockTop(secondSelectorBottom - secondBlockHeight);
    } else if (secondSelectorBottom >= clientHeight) {
      setSecondBlockTop(clientHeight - secondBlockHeight);
    }
  }, [clientHeight, secondBlockHeight, secondSelectorBottom]);

  // Клик первого контроллера (first Controller)
  const onClickFirstSelectController = () => {
    // setFirstBlockVisible((prev) => !prev);
    setFirstBlockVisible(!firstBlockVisible);
    setSecondBlockVisible(false);
  };

  // Клик второго контроллера (second Controller)
  const onClickSecondSelectController = () => {
    setSecondBlockVisible(!secondBlockVisible);
    setFirstBlockVisible(false);
  };

  // получаем клик из first OptionsBlock
  const onClickFirstOptionsBlock = () => {
    setFirstBlockVisible(false);
  };

  // получаем клик из Second OptionsBlock
  const onClickSecondOptionsBlock = () => {
    setSecondBlockVisible(false);
  };

  // получаем изменения выбранного значения из first OptionsBlock
  const onChangeFirstOptionsBlock = (value: React.SetStateAction<string>, id: React.SetStateAction<string>) => {
    setFirstCurrentValue(value);
    setFirstBlockIdOption(id);
    console.log(value, id);
  };

  // получаем изменения выбранного значения из Second OptionsBlock
  const onChangeSecondOptionsBlock = (value: React.SetStateAction<string>, id: React.SetStateAction<string>) => {
    setSecondCurrentValue(value);
    setSecondBlockIdOption(id);
  };

  // Функция получения высоты окна браузера.
  const getClientHeight = () => {
    setClientHeight(window.innerHeight);
  };

  // функция получения высоты блоков опций
  const getOptionsBlockHeight = () => {
    if (refFirstSelectBlock.current) {
      setFirstBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
      setSecondBlockHeight(refFirstSelectBlock.current.getBoundingClientRect().height);
    }
  };

  //  Получаем top, bottom, left, width из компонента PortfolioStructure.tsx при скроллинге
  const onScrollPortfolioStructure = (
    top: React.SetStateAction<number>,
    bottom: React.SetStateAction<number>,
    left: React.SetStateAction<number>,
    width: React.SetStateAction<number>
  ) => {
    setFirstSelectorTop(top);
    setFirstSelectorBottom(bottom);
    setFirstSelectorLeft(left);
    setFirstSelectorWidth(width);
    // Делаем вызов функции
    getClientHeight();
  };

  //  Получаем top, bottom, left, width из компонента CompositionReserves.tsx при скроллинге
  const onScrollCompositionReserves = (
    top: React.SetStateAction<number>,
    bottom: React.SetStateAction<number>,
    left: React.SetStateAction<number>,
    width: React.SetStateAction<number>
  ) => {
    setSecondSelectorTop(top);
    setSecondSelectorBottom(bottom);
    setSecondSelectorLeft(left);
    setSecondSelectorWidth(width);
    console.log(top, bottom, left, width);
  };
  return (
    <>
      <TopBlock
        heading="Инвестиционная"
        headingSpan="деятельность"
        subheading="АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности, в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой"
        image={investImage}
      />

      <div id="portfolioStructure">
        <PortfolioStructure
          isvisible={firstBlockVisible}
          selectorValue={firstCurrentValue}
          idOption={firstBlockIdOption}
          onClickSelector={onClickFirstSelectController}
          emitCoords={onScrollPortfolioStructure}
          emitSelectorBottomLeft={getFirstSelectorBottomLeft}
        />
      </div>

      <ContainerOptionBlock
        firstvisible={firstBlockVisible}
        ref={refFirstSelectBlock}
        style={{
          top: `${firstBlockTop}px`,
          left: `${firstSelectorLeft + 6}px`,
          width: `${firstSelectorWidth - 12}px`,
        }}
      >
        <OptionsBlock
          optionsItems={formattedOptionsItems}
          emitValue={onChangeFirstOptionsBlock}
          onClickOptionsBlock={onClickFirstOptionsBlock}
          currentValue={firstCurrentValue}
        />
      </ContainerOptionBlock>
    </>
  );
};

export default InvestmentPage;
