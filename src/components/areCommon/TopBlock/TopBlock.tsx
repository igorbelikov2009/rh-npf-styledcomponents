import React, { FC } from "react";
import { Container, Heading, HeadingSpan, StyledTopBlock, Subheading, SubheadingSpan } from "./styles";

interface TopBlockProps {
  heading: string;
  headingSpan?: string;
  subheading?: string;
  subheadingSpan?: string;
  image: string;
}

const TopBlock: FC<TopBlockProps> = ({ heading, headingSpan, subheading, subheadingSpan, image }) => {
  return (
    <StyledTopBlock style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Heading>
          {heading}

          <HeadingSpan>{headingSpan} </HeadingSpan>
        </Heading>

        <Subheading>
          {subheading}
          <SubheadingSpan>{subheadingSpan}</SubheadingSpan>
        </Subheading>
      </Container>
    </StyledTopBlock>
  );
};

export default TopBlock;
