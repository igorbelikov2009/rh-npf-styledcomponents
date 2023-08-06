import React, { FC } from "react";

import {
  BlackLine,
  Border,
  DateContainer,
  IconContainer,
  IconRotated,
  DateSelector,
  DateValue,
  StyledSelector,
  TitleContainer,
  WhiteLine,
} from "./styles";

export interface SelectorProps {
  value: string;
  isvisible: boolean;
  onClickSelector: () => void;
}

const Selector: FC<SelectorProps> = ({ value, isvisible, onClickSelector }) => {
  return (
    <StyledSelector>
      <TitleContainer>
        <Border isvisible={isvisible}>
          <DateContainer isvisible={isvisible} onClick={onClickSelector}>
            <DateSelector>
              <DateValue> {value} </DateValue>
            </DateSelector>

            <IconContainer>
              <IconRotated isvisible={isvisible} src="/icons/triple/Arrow Down/Dark.svg" alt="Arrow" />
            </IconContainer>
          </DateContainer>

          <WhiteLine isvisible={isvisible}>
            <BlackLine isvisible={isvisible} />
            <BlackLine isvisible={isvisible} />
          </WhiteLine>
        </Border>
      </TitleContainer>
    </StyledSelector>
  );
};

export default Selector;
