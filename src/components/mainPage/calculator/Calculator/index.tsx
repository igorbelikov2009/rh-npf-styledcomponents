import React, { useState, useEffect } from "react";
import Graph from "../Graph";
import PensionInfo from "../PensionInfo";
import {
  AgeBlock,
  Block,
  Box,
  CheckboxContainer,
  CheckboxInfo,
  Container,
  GraphContainer,
  Heading,
  RadioContainer,
  Sliders,
  StyledCalculator,
  Subheading,
} from "./styles";
import Checkbox from "../../../ui/Checkbox";
import DownPaymentSlider from "../sliders/DownPaymentSlider";
import MonthlyInstallmenSlider from "../sliders/MonthlyInstallmenSlider";
import PeriodPaymentPensionSlider from "../sliders/PeriodPaymentPensionSlider";
import AgeSlider from "../sliders/AgeSlider";
import GenderRadio from "../radios/GenderRadio";

const Calculator = () => {
  const [genderValue, setGenderValue] = useState<string>("60"); // гендерный возраст выхода на пенсию
  const [ageMan, setAgeMan] = useState("65"); // возраст выхода на пенсию мужчины
  const [ageWoman, setAgeWoman] = useState("60"); // возраст выхода на пенсию женщины
  const [ageValue, setAgeValue] = useState("30"); // текущий возраст
  const [ageSliderMax, setAgeSliderMax] = useState("65"); // устанавливаем атрибуты для ageSlider
  const [investmentTerm, setInvestmentTerm] = useState(35); // срок инвестирования => investmentTerm
  const [downPayment, setDownPayment] = useState("1000"); // первичный взнос => downPayment
  const [monthlyInstallment, setMonthlyInstallment] = useState("5000"); // ежемесячный взнос => monthlyInstallment
  const [periodPaymentPension, setPeriodPaymentPension] = useState("15"); // срок выплат пенсии => periodPaymentPension
  const yearPersent = 0.05; // годовой процент накопления => annualPercentage
  const [generalAccumValue, setGeneralAccumValue] = useState(0); // общие накопления => generalSavings
  const [pensionValue, setPensionValue] = useState(0); // размер выплаты пенсии => pension
  const [earlyRretirement, setEarlyRretirement] = useState(false); // ускоренный выход на пенсию

  useEffect(() => {
    if (earlyRretirement) {
      setGenderValue("60");
      setAgeMan("60");
      setAgeWoman("55");
      setAgeSliderMax("60");
    } else {
      setGenderValue("60");
      setAgeMan("65");
      setAgeWoman("60");
      setAgeSliderMax("60");
    }
  }, [earlyRretirement]);

  const onChangeGenderRadio = (emitGenderRadio: React.SetStateAction<string>) => {
    setGenderValue(emitGenderRadio);
    setAgeSliderMax(emitGenderRadio);
  };
  // console.log("ageSliderMax :" + ageSliderMax);

  const toogleChecked = () => {
    setEarlyRretirement((prev) => !prev);
  };
  // console.log("ageMan :" + ageMan);
  // console.log("ageWoman :" + ageWoman);
  // console.log("genderValue :" + genderValue);
  // console.log(earlyRretirement);

  const ageSliderHandler = (ageSliderValue: string) => {
    setAgeValue(ageSliderValue);
  };
  const downPaymentSliderHandler = (downPaymentValue: string) => {
    setDownPayment(downPaymentValue);
  };
  const monthlyInstallmenSliderHandler = (monthlyInstallmentValue: string) => {
    setMonthlyInstallment(monthlyInstallmentValue);
  };
  const periodPaymentPensionSliderHandler = (periodPaymentPension: string) => {
    setPeriodPaymentPension(periodPaymentPension);
  };

  useEffect(() => {
    setInvestmentTerm(Number(genderValue) - Number(ageValue));
    // console.log("investmentTerm :" + investmentTerm);
    // console.log("downPayment :" + downPayment);
    // console.log("monthlyInstallment :" + monthlyInstallment);
    // console.log("periodPaymentPension :" + periodPaymentPension);

    // // обнуляем каждый раз накопления от первичного взноса
    let firstInvestAccumValue = 0;
    // // обнуляем каждый раз накопления ежемесячных взносов
    let monthInvestAccumValue = 0;

    // // вычисляем общий процент накопления за несколько лет
    let generalPercent = 1 + yearPersent;
    const percentInvestmentTerm = generalPercent ** investmentTerm;
    // console.log("percent:", percentInvestmentTerm);

    // // вычисляем накопления от первичного взноса
    firstInvestAccumValue = Number(downPayment) * percentInvestmentTerm;
    firstInvestAccumValue = Math.round(firstInvestAccumValue);
    // console.log("firstInvestAccumValue:" + firstInvestAccumValue);

    // // вычисляем количество месяцев ежемесячных взносов
    let numberOfMonths = investmentTerm * 12;
    // console.log("numberOfMonths:" + numberOfMonths);

    // // вычисляем накопления ежемесячных взносов за нескольк лет (количество месяцев ежемесячных взносов)
    monthInvestAccumValue = 0; // обнуляем при каждом новом движении слайдера или свиттча
    monthInvestAccumValue = Math.round(
      Number(monthlyInstallment) * numberOfMonths +
        Number(monthlyInstallment) * (numberOfMonths - 1) * ((yearPersent * numberOfMonths) / 24)
    );
    // console.log("monthInvestAccumValue:" + monthInvestAccumValue);

    // // вычисляем общие накопления
    setGeneralAccumValue(0);
    setGeneralAccumValue(Math.round(firstInvestAccumValue + monthInvestAccumValue));
    // console.log("generalAccumValue:" + generalAccumValue);

    // // вычисляем размер ежемесячной пенсии
    setPensionValue(Math.round(generalAccumValue / Number(periodPaymentPension) / 12));
    // console.log("pensionValue:", pensionValue);
    // console.log("finish");
  }, [
    genderValue,
    earlyRretirement,
    ageValue,
    investmentTerm,
    downPayment,
    monthlyInstallment,
    periodPaymentPension,
    generalAccumValue,
  ]);

  return (
    <StyledCalculator>
      <Container>
        <Heading>Калькулятор</Heading>
        <Subheading>Рассчитайте будущую пенсию</Subheading>

        <Block>
          <Box>
            <Sliders>
              <form>
                <AgeBlock>
                  <RadioContainer>
                    <GenderRadio
                      ageMan={ageMan}
                      ageWoman={ageWoman}
                      genderValue={genderValue}
                      onChangeGenderRadio={onChangeGenderRadio}
                    />
                  </RadioContainer>
                  <AgeSlider ageSliderMax={ageSliderMax} ageSliderHandler={ageSliderHandler} />
                </AgeBlock>

                <>
                  <DownPaymentSlider downPaymentSliderHandler={downPaymentSliderHandler} />
                  <MonthlyInstallmenSlider monthlyInstallmenSliderHandler={monthlyInstallmenSliderHandler} />
                  <PeriodPaymentPensionSlider periodPaymentPensionSliderHandler={periodPaymentPensionSliderHandler} />
                </>

                <CheckboxContainer>
                  <Checkbox checkedValue={earlyRretirement} toogleChecked={toogleChecked} />
                </CheckboxContainer>

                {!earlyRretirement && (
                  <CheckboxInfo>
                    * Расчет производится на основании достижения возраста, дающего право на получение страховой пенсии
                    по старости, в случае если это предусмотрено пенсионным договором.
                  </CheckboxInfo>
                )}
              </form>
            </Sliders>
            <PensionInfo generalAccumValue={generalAccumValue} pensionValue={pensionValue} />
          </Box>

          <GraphContainer>
            <Graph />
          </GraphContainer>
        </Block>
      </Container>
    </StyledCalculator>
  );
};

export default Calculator;
