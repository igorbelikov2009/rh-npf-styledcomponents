import React, { FC, useState } from "react";
import SelectorAndOptionBlock from "../../../ui/select/SelectorAndOptionBlock";
import { optionsItemsReporting, reportings } from "../../../../data/infoDisclosureData";
import AdaptiveRadio from "../../../ui/radios/AdaptiveRadio";
import ButtonToArchive from "../../../ui/buttons/ButtonToArchive/ButtonToArchive";
import Reports from "../Reports";
import {
  ButtonContainer,
  Container,
  FlexContainer,
  Heading,
  RadioContainer,
  SelectorContainer,
  StyledReporting,
} from "./styles";

interface ReportingProps {
  onClickArchiveReporting: () => void;
}

const Reporting: FC<ReportingProps> = ({ onClickArchiveReporting }) => {
  const [currentValue, setCurrentValue] = useState("2021");
  const [id, setId] = useState("0");
  const [isSelectorOptionBlockVisible, setSelectorOptionBlockVisible] = useState(false);

  const onChangeAdaptiveRadio = (value: string, id: string) => {
    setCurrentValue(value);
    setId(id);
  };

  const onChangeSelectorOptionBlock = (value: React.SetStateAction<string>, id: string) => {
    setCurrentValue(value);
    setId(id);
  };

  const onClickSelector = () => {
    setSelectorOptionBlockVisible((prev) => !prev);
  };

  const onClickSelectorOptionBlock = () => {
    setSelectorOptionBlockVisible(false);
  };

  return (
    <StyledReporting>
      <Container>
        <Heading>Отчётность</Heading>

        <FlexContainer>
          <SelectorContainer>
            <SelectorAndOptionBlock
              currentValue={currentValue}
              optionsItems={optionsItemsReporting}
              isVisible={isSelectorOptionBlockVisible}
              onClickSelector={onClickSelector}
              emitOnChangeRadio={onChangeSelectorOptionBlock}
              emitOnClickRadio={onClickSelectorOptionBlock}
            />
          </SelectorContainer>

          <RadioContainer>
            <AdaptiveRadio
              currentValue={currentValue}
              optionsItems={optionsItemsReporting}
              emitValue={onChangeAdaptiveRadio}
            />
          </RadioContainer>

          <ButtonContainer onClick={onClickArchiveReporting}>
            <ButtonToArchive />
          </ButtonContainer>
        </FlexContainer>

        <>
          {reportings &&
            reportings.map((reports, index) => (
              <Reports key={index} reports={reports} isVisible={index === Number(id)} />
            ))}
        </>
      </Container>
    </StyledReporting>
  );
};

export default Reporting;
