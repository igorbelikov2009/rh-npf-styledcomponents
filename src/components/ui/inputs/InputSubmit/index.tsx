import React, { FC } from "react";
import { StyledInputSubmit } from "./styles";

interface InputSubmitProps {
  children: string;
  disabled?: boolean;
}

const InputSubmit: FC<InputSubmitProps> = ({ children, disabled }) => {
  return <StyledInputSubmit type="submit" value={children} disabled={disabled} />;
};

export default InputSubmit;
