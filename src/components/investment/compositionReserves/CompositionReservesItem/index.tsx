/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"; // анимация
import React, { FC } from "react";
import { IExpandingTable } from "../../../../interfaces/types";
import ExpandingTable from "../../../areCommon/expanding/ExpandingTable";

interface CompositionReservesItemProps {
  isVisible: boolean;
  arrayOfExpanderTables: IExpandingTable[];
}

const CompositionReservesItem: FC<CompositionReservesItemProps> = ({ isVisible, arrayOfExpanderTables }) => {
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            {arrayOfExpanderTables.map((expander, index) => (
              <ExpandingTable key={index} oneExpandingTable={expander} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompositionReservesItem;
