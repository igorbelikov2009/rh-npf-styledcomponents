import React, { FC } from "react";
import { SelectorAndOptionBlockProps } from "../../../../interfaces/types";
import Selector from "../Selector";
import OptionsBlock from "../OptionsBlock";
import { Container, Options } from "./styles";

const SelectorAndOptionBlock: FC<SelectorAndOptionBlockProps> = ({
  isVisible,
  optionsItems,
  currentValue,
  emitOnChangeRadio,
  emitOnClickRadio,
  onClickSelector,
}) => {
  const onClickRadioSelector = () => {
    onClickSelector();
  };

  const onChangeRadio = (value: string, id: string) => {
    emitOnChangeRadio(value, id);
  };
  const onClickRadio = () => {
    emitOnClickRadio();
  };

  return (
    <Container>
      <Selector value={currentValue} isvisible={isVisible} onClickSelector={onClickRadioSelector} />

      <Options visible={isVisible}>
        <OptionsBlock
          optionsItems={optionsItems}
          currentValue={currentValue}
          emitValue={onChangeRadio}
          onClickOptionsBlock={onClickRadio}
        />
      </Options>
    </Container>
  );
};

export default SelectorAndOptionBlock;
