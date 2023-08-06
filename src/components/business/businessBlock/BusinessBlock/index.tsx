/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { ITitle } from "../../../../interfaces/types";
import { CarouselContainer, ContainerChangingTitles, Header, ScrollableElement, StyledBusinessBlock } from "./styles";
import CarouselHeader from "../../../areCommon/carousel/CarouselHeader";
import BusinessCarousel from "../BusinessCarousel";
import ChangingTitles from "../ChangingTitles";

const BusinessBlock = () => {
  // для CarouselHeader
  // меняем цвет у стрелок и свойства курсора на "cursor: default;"
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isBlurredLeft, setIsBlurredLeft] = useState(true);
  const [isHoveredRight, setIsHoveredRight] = useState(true);
  const [isBlurredRight, setIsBlurredRight] = useState(false);

  const [carouselValue, setCarouselValue] = useState(0);
  const [amountChildren, setAmountChildren] = useState(0);
  const [right, setRight] = useState(0); // значение прокрутки scrollableElement, записываемое в его атрибут style
  const [stepScrolling] = useState(224); // шаг прокрутки

  const subheadings: ITitle[] = [
    { title: "Сохранение статуса и образа жизни после выхода на пенсию." },
    { title: "Увеличение лояльности работников к работодателю." },
    { title: "Комфортное увольнение на пенсию без существенной потери доходов." },
    {
      title: "Уплата пенсионных взносов в пользу работника зависит от соблюдения им трудовой дисциплины.",
    },
    {
      title:
        "Зависимость размера пенсионных взносов от продолжительности участия в пенсионной программе, должностных грейдов и стажа.",
    },
    { title: "Использование льгот по налогу на прибыль." },
    { title: "Передача Фонду функции социальной поддержки." },
  ];

  const getAmountChildren = (value: React.SetStateAction<number>) => {
    setAmountChildren(value);
  };

  // getCarouselValue
  const getCarouselValueOnClickArrowLeft = () => {
    if (carouselValue !== 0) {
      setCarouselValue((prev) => prev - 1);
    }
    if (carouselValue < 0) {
      setCarouselValue(0);
    }
  };
  // getCarouselValue
  const getCarouselValueOnClickArrowRight = () => {
    if (carouselValue < amountChildren - 1) {
      setCarouselValue((prev) => prev + 1);
    } else if (carouselValue === amountChildren - 1) {
      // console.log("Что-то надо сделать");
    }
  };
  // console.log("carouselValue: " + carouselValue);

  useEffect(() => {
    setRight(carouselValue * stepScrolling);
  }, [carouselValue, stepScrolling]);

  // меняем цвет у стрелок и свойства курсора на "cursor: default;"
  const changeColorArrowsOnClickArrowLeft = () => {
    setIsHoveredRight(true);
    setIsBlurredRight(false);
    if (carouselValue === 1) {
      setIsHoveredLeft(false);
      setIsBlurredLeft(true);
    }
  };
  const changeColorArrowOnClickArrowRight = () => {
    if (carouselValue < amountChildren - 2) {
      setIsHoveredLeft(true);
      setIsBlurredLeft(false);
    } else {
      setIsHoveredRight(false);
      setIsBlurredRight(true);
    }
  };
  const changeColorArrowOnClickRadio = () => {
    if (carouselValue === 0) {
      setIsHoveredLeft(false);
      setIsBlurredLeft(true);
      setIsHoveredRight(true);
      setIsBlurredRight(false);
    } else if (carouselValue === amountChildren - 1) {
      setIsHoveredLeft(true);
      setIsBlurredLeft(false);
      setIsHoveredRight(false);
      setIsBlurredRight(true);
    } else {
      setIsHoveredLeft(true);
      setIsBlurredLeft(false);
      setIsHoveredRight(true);
      setIsBlurredRight(false);
    }
  };

  // клик по CarouselRadio
  const onChangeCarouselRadio = (value: string) => {
    setCarouselValue(Number(value));
    changeColorArrowOnClickRadio();
  };

  // клик по левой стрелке
  const onClickLeftArrow = () => {
    changeColorArrowsOnClickArrowLeft();
    getCarouselValueOnClickArrowLeft();
  };

  // клик по правой стрелке
  const onClickRightArrow = () => {
    changeColorArrowOnClickArrowRight();
    getCarouselValueOnClickArrowRight();
  };

  return (
    <StyledBusinessBlock>
      <Header>
        <CarouselHeader
          headerSubtitle="Какие задачи решает внедрение пенсионной программы"
          isBlurredLeft={isBlurredLeft}
          isBlurredRight={isBlurredRight}
          isHoveredLeft={isHoveredLeft}
          isHoveredRight={isHoveredRight}
          onClickLeft={onClickLeftArrow}
          onClickRight={onClickRightArrow}
        />

        <CarouselContainer>
          <ScrollableElement style={{ right: `${right}px` }}>
            <BusinessCarousel
              currentValue={carouselValue}
              emitAmountChildren={getAmountChildren}
              emitValue={onChangeCarouselRadio}
            />
          </ScrollableElement>
        </CarouselContainer>
      </Header>

      <ContainerChangingTitles>
        {subheadings.map((heading, index) => (
          <ChangingTitles key={index} title={heading.title} isActive={index === carouselValue} />
        ))}
      </ContainerChangingTitles>
    </StyledBusinessBlock>
  );
};

export default BusinessBlock;
