import React, { FC } from "react";
import { styled } from "styled-components";

interface InputFieldProps {
  type: string;
  name: string;
  isError: boolean;
  emitValue: (value: string) => void;
  emitFocus: () => void;
  emitBlur: () => void;
}

export const StyledInputField = styled.input<{ error: boolean }>`
  width: 100%;
  font-size: 16px;
  line-height: 23px;
  padding: 24px 0 8px;
  color: #28323c;
  box-sizing: border-box;
  cursor: pointer;

  border-bottom: ${({ error }) => (error ? "#f20707" : "#b5bdc8")};

  &:hover {
    line-height: 22px;
    border-bottom: 2px solid #50287d;
  }

  &:focus {
    line-height: 22px;
    border-bottom: 2px solid #50287d;
  }
`;

const InputField: FC<InputFieldProps> = ({ type, name, isError, emitValue, emitFocus, emitBlur }) => {
  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitValue(event.target.value);
  };

  return (
    <StyledInputField
      error={isError}
      type={type}
      name={name}
      onFocus={emitFocus}
      onBlur={emitBlur}
      onChange={handlerInput}
    />
  );
};

export default InputField;
