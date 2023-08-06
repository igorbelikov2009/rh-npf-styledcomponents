import React, { FC } from "react";
import { IParagraphBefore } from "../../../../interfaces/types";
import { StyledParagraphBefore } from "./styles";

const ParagraphBefore: FC<IParagraphBefore> = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <StyledParagraphBefore>{paragraph}</StyledParagraphBefore>
      ))}
    </>
  );
};

export default ParagraphBefore;
