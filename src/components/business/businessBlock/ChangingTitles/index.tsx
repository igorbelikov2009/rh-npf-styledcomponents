import React, { FC } from "react";
import { StyledChangingTitles } from "./styles";

interface ChangingTitlesProps {
  isActive: boolean;
  title: string;
}

const ChangingTitles: FC<ChangingTitlesProps> = ({ title, isActive }) => {
  return <>{isActive && <StyledChangingTitles> {title} </StyledChangingTitles>}</>;
};

export default ChangingTitles;
