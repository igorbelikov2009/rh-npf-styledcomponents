import React, { FC } from "react";
import { StyledPrimaryButton } from "./styles";

interface PrimaryButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, disabled, ...props }) => {
  return <StyledPrimaryButton disabled={disabled}> {children} </StyledPrimaryButton>;
};

export default PrimaryButton;
