import React, { FC } from "react";
import { IParagraph } from "../../../../interfaces/types";
import { StyledParagraph } from "./styles";

const Paragraph: FC<IParagraph> = ({ paragraphs }) => {
  return <>{paragraphs && paragraphs.map((paragraph, index) => <StyledParagraph>{paragraph}</StyledParagraph>)}</>;
};

export default Paragraph;
