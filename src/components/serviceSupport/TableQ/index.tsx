import React, { FC } from "react";
import { ITableContributions } from "../../../interfaces/types";
import { CellRow, Container, HeadersRow, StyledTable, Td, Tr } from "./styles";

const TableQ: FC<ITableContributions> = ({ headings, arrayRows }) => {
  return (
    <StyledTable>
      <Container></Container>
      <table>
        <thead>
          <Tr>
            {headings.map((heading, index) => (
              <Td key={index}>
                <HeadersRow> {heading} </HeadersRow>
              </Td>
            ))}
          </Tr>
        </thead>

        <tbody>
          {arrayRows.map((row, index) => (
            <Tr>
              {row.map((cell, index) => (
                <Td key={index}>
                  <CellRow> {cell} </CellRow>
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default TableQ;
