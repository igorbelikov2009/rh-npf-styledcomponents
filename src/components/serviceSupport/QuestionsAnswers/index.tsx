import React from "react";
import { questionsAboutPension } from "../../../data/serviceSupportData";
import QuestionAnswerTable from "../QuestionAnswerTable";
import { Container, Heading } from "./styles";
import ExpandingAnswer from "../../areCommon/expanding/ExpandingAnswer";

const QuestionsAnswers = () => {
  return (
    <Container>
      <Heading>Вопросы и ответы</Heading>

      {questionsAboutPension.map((obj, index) => (
        <ExpandingAnswer
          key={index}
          question={obj.question}
          answer={obj.answer}
          isParagraph={obj.isParagraph}
          isParagraphBefore={obj.isParagraphBefore}
        />
      ))}

      <QuestionAnswerTable />
    </Container>
  );
};

export default QuestionsAnswers;
