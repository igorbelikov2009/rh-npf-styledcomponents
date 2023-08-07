import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState } from "react";
import { IObjectQuestionsAnswers } from "../../../../interfaces/types";
import ExpandingPanel from "../ExpandingPanel";
import Paragraph from "../../paragraphs/Paragraph";
import { Container, Content } from "./styles";

const ExpandingAnswer: FC<IObjectQuestionsAnswers> = ({ answer, question, isParagraph, isParagraphBefore }) => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <Container>
      <ExpandingPanel visible={isVisible} panelName={question} onClickExpanding={expanderHandler} />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            {isParagraph && (
              <Content>
                <Paragraph paragraphs={answer} />
              </Content>
            )}
            {isParagraphBefore && (
              <Content>
                <Paragraph paragraphs={answer} />
              </Content>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ExpandingAnswer;
