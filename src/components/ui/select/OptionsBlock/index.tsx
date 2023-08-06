import React, { FC } from "react";
import { IOptionItem } from "../../../../interfaces/types";
import OptionItem from "../OptionItem";
import { ScrollableBlock, StyledOptionsBlock } from "./styles";

interface OptionsBlockProps {
  optionsItems: IOptionItem[];
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
  onClickOptionsBlock: () => void;
  currentValue: string;
}

const OptionsBlock: FC<OptionsBlockProps> = ({ optionsItems, emitValue, onClickOptionsBlock, currentValue }) => {
  const onChangeOption = (value: React.SetStateAction<string>, id: string) => {
    emitValue(value, id);
    // console.log(value, id);
  };

  return (
    <StyledOptionsBlock onClick={onClickOptionsBlock}>
      <ScrollableBlock>
        {optionsItems.map((option, index) => (
          <OptionItem
            key={index}
            date={option.date}
            value={option.value}
            id={option.id}
            active={option.value === currentValue}
            emitValue={onChangeOption}
          />
        ))}
      </ScrollableBlock>
    </StyledOptionsBlock>
  );
};

export default OptionsBlock;
