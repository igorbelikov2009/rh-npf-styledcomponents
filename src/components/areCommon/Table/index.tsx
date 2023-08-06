import React, { FC } from "react";
import { TableProps } from "../../../interfaces/types";
import { StyledTable, TableContainer, Td, Th, Tr } from "./styles";

const Table: FC<TableProps> = ({ arrayRows, headings }) => {
  return (
    <StyledTable>
      <TableContainer>
        <table>
          <thead>
            <Tr>
              {headings.map((heading, index) => (
                <Th key={index}> {heading} </Th>
              ))}
            </Tr>
          </thead>

          <tbody>
            {arrayRows.map((row, index) => (
              <Tr key={index}>
                {row.map((cell, index) => (
                  <Td key={index}> {cell} </Td>
                ))}
              </Tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </StyledTable>
  );
};

export default Table;
