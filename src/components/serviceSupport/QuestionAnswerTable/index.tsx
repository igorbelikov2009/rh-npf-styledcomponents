import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // анимация
import ExpandingPanel from "../../areCommon/expanding/ExpandingPanel";
import TableQ from "../TableQ";
import { companyContributions, participantContributions } from "../../../data/serviceSupportData";
import { Content, Paragraph, StyledExpander } from "./styles";

const QuestionAnswerTable = () => {
  const [isVisible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <StyledExpander>
      <ExpandingPanel
        visible={isVisible}
        panelName="Какие налоги уплачиваются в связи с участием в пенсионной программе?"
        onClickExpanding={expanderHandler}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <Content>
              <Paragraph>Порядок налогообложения при выплате пенсий и выкупных сумм:</Paragraph>

              <TableQ arrayRows={companyContributions.arrayRows} headings={companyContributions.headings} />

              <Paragraph>
                <br />
              </Paragraph>

              <TableQ arrayRows={participantContributions.arrayRows} headings={participantContributions.headings} />

              <Paragraph> * Независимо от факта получения / неполучения социального налогового вычета</Paragraph>

              <Paragraph>
                Участникам пенсионных программ предоставляются налоговые льготы - возможность получить социальный
                налоговый вычет в размере 13% от суммы уплаченных взносов по личному договору негосударственного
                пенсионного обеспечения (максимальный размер суммы взносов для получения налогового вычета – 120 000
                рублей/год).
              </Paragraph>
            </Content>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledExpander>
  );
};

export default QuestionAnswerTable;
