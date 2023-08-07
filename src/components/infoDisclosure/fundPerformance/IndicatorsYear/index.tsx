import React, { FC } from "react";
import { IndicatorsYearProps } from "../../../../interfaces/types";
import { styled } from "styled-components";
import IndicatorRow from "../IndicatorRow";
import ArchiveLink from "../../../ui/links/ArchiveLink";

export const Container = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e4e4e4;

  &:first-of-type {
    padding-top: 0;
  }
`;

export const Heading = styled.p`
  display: block;
  width: 100%;
  max-width: 560px;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
`;

export const Subheading = styled.p`
  display: block;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  flex: none;
  margin-left: 12px;

  @media screen and (min-width: 576px) {
    margin-left: 40px;
  }
`;

const IndicatorsYear: FC<IndicatorsYearProps> = ({ archiveLinks, isVisible, heading, indicatorRows, subheading }) => {
  return (
    <>
      {isVisible && (
        <>
          <Container>
            <Heading> {heading} </Heading>
            <Subheading> {subheading} </Subheading>
          </Container>

          {indicatorRows &&
            indicatorRows.map((indicatorRow, index) => (
              <IndicatorRow key={index} title={indicatorRow.title} index={indicatorRow.index} />
            ))}

          {archiveLinks.map((link, index) => (
            <ArchiveLink key={index} href={link.href} title={link.title} />
          ))}
        </>
      )}
    </>
  );
};

export default IndicatorsYear;
