import React, { FC } from "react";
import styled from "styled-components";

interface DarkIconProps {
  icon: string;
  isDecreased?: boolean;
}

export const StyledDarkIcon = styled.img`
  height: 24px;
  width: 24px;
`;

export const StyledDecreasedDarkIcon = styled.img`
  height: 18px;
  width: 18px;
`;

const DarkIcon: FC<DarkIconProps> = ({ icon, isDecreased }) => {
  if (isDecreased) {
    return <StyledDecreasedDarkIcon src={`/icons/triple/${icon}/Dark.svg`} alt="icon" />;
  }

  return <StyledDarkIcon src={`/icons/triple/${icon}/Dark.svg`} alt="icon" />;
};

export default DarkIcon;
