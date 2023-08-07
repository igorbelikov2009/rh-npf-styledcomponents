import React, { FC } from "react";
import { IIndicatorRow } from "../../../../interfaces/types";
import { Index, Row, Title } from "./styles";

const IndicatorRow: FC<IIndicatorRow> = ({ index, title }) => {
  return (
    <Row>
      <Title> {title} </Title>
      <Index> {index} </Index>
    </Row>
  );
};

export default IndicatorRow;
