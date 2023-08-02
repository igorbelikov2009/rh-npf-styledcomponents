import React, { FC } from "react";
import { AgreeSpan, AgreeTitle, CheckboxInput, Checker, ContainerAgree, StyledCheckBox, SwitchChecker } from "./styles";

interface CheckboxProps {
  checkedValue: boolean;
  toogleChecked: () => void;
  title?: string;
  span?: string;
  subtitle?: string;
}

const Checkbox: FC<CheckboxProps> = ({ checkedValue, toogleChecked, title, span, subtitle }) => {
  const handlerCheckbox = () => {
    toogleChecked();
  };

  return (
    <StyledCheckBox>
      <Checker />

      <SwitchChecker checkedValue={checkedValue} />

      <CheckboxInput type="checkbox" checked={checkedValue} onChange={handlerCheckbox} />

      <ContainerAgree>
        <AgreeTitle> {title} </AgreeTitle>

        <AgreeSpan> {span} </AgreeSpan>

        <AgreeTitle> {subtitle} </AgreeTitle>
      </ContainerAgree>
    </StyledCheckBox>
  );
};

export default Checkbox;
