import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC, useState } from "react";
import { IExpandingTable } from "../../../../interfaces/types";
import { StyledExpandingTable } from "./styles";
import ExpandingPanel from "../ExpandingPanel";
import Table from "../../Table";

export interface ExpandingTableProps {
  oneExpandingTable: IExpandingTable;
  //  oneExpandingTable - одна расширяющаяся таблица
}

const ExpandingTable: FC<ExpandingTableProps> = ({ oneExpandingTable }) => {
  const [visible, setVisible] = useState(false);

  const expanderHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <StyledExpandingTable>
      <ExpandingPanel visible={visible} panelName={oneExpandingTable.tableName} onClickExpanding={expanderHandler} />

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <Table headings={oneExpandingTable.headings} arrayRows={oneExpandingTable.arrayRows} />
          </motion.div>
        )}
      </AnimatePresence>
    </StyledExpandingTable>
  );
};

export default ExpandingTable;
