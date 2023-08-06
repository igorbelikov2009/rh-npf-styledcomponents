import React, { FC } from "react";
import styled from "styled-components";

export interface OptionItemProps {
  active: boolean;
  date: string;
  value: string;
  id: string;
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
}

export const StyledOption = styled.label<{ active: boolean }>`
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  padding: 19px 16px;
  font-size: 14px;
  line-height: 18px;
  transition: color 0.3s, background 0.4s;
  font-weight: 400;
  cursor: pointer;

  background-color: ${({ active }) => (active ? "#50287d" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#28323c")};
`;

export const Input = styled.input`
  display: none;
`;

const OptionItem: FC<OptionItemProps> = ({ active, date, value, id, emitValue }) => {
  const selectorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value, id);
  };

  return (
    <StyledOption active={active}>
      {date}
      <Input type="radio" value={value} id={id} name="date" onChange={selectorHandler} />
    </StyledOption>
  );
};

export default OptionItem;
