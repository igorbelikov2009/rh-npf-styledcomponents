/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Container, Heading, Indicators, Radio, Selector, SelectorRadio, StyledFundPerformance } from "./styles";
import { fundIndicators, optionsItemsFundPerformance } from "../../../../data/infoDisclosureData";
import IndicatorsYear from "../IndicatorsYear";
import SelectorAndOptionBlock from "../../../ui/select/SelectorAndOptionBlock";
import AdaptiveRadio from "../../../ui/radios/AdaptiveRadio";

const FundPerformance = () => {
  const [currentValue, setCurrentValue] = useState("2021");
  const [idOptions, setIdOptions] = useState("0");
  const [isVisible, setVisible] = useState(false);

  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setIdOptions(id);
  };

  const onClickSelector = () => {
    setVisible((prev) => !prev);
  };
  const onChangeRadio = (value: React.SetStateAction<string>, id: string) => {
    setCurrentValue(value);
    setIdOptions(id);
  };
  const onClickRadio = () => {
    setVisible(false);
  };

  return (
    <StyledFundPerformance>
      <Container>
        <Heading>Показатели деятельности</Heading>

        <SelectorRadio>
          <Selector>
            <SelectorAndOptionBlock
              currentValue={currentValue}
              optionsItems={optionsItemsFundPerformance}
              isVisible={isVisible}
              onClickSelector={onClickSelector}
              emitOnChangeRadio={onChangeRadio}
              emitOnClickRadio={onClickRadio}
            />
          </Selector>

          <Radio>
            <AdaptiveRadio
              optionsItems={optionsItemsFundPerformance}
              currentValue={currentValue}
              emitValue={onChangeAdaptiveRadio}
            />
          </Radio>
        </SelectorRadio>

        <Indicators>
          {fundIndicators &&
            fundIndicators.map((item, index) => (
              <IndicatorsYear
                key={index}
                heading={item.heading}
                subheading={item.subheading}
                archiveLinks={item.archiveLinks}
                indicatorRows={item.indicatorRows}
                isVisible={Number(idOptions) === index}
              />
            ))}
        </Indicators>
      </Container>
    </StyledFundPerformance>
  );
};

export default FundPerformance;
