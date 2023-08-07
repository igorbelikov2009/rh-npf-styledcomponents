import React from "react";
import { pensionPrograms } from "../../../data/serviceSupportData";
import ExpandingAnswer from "../../areCommon/expanding/ExpandingAnswer";
import { Container, Heading } from "./styles";

const PensionPrograms = () => {
  return (
    <Container>
      <Heading>Пенсионные программы</Heading>

      {pensionPrograms.map((obj) => (
        <ExpandingAnswer
          key={obj.question}
          question={obj.question}
          answer={obj.answer}
          isParagraph={obj.isParagraph}
          isParagraphBefore={obj.isParagraphBefore}
        />
      ))}
    </Container>
  );
};

export default PensionPrograms;
