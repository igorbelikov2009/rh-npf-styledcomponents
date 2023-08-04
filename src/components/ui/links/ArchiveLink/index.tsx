import React, { FC, useState } from "react";
import styled from "styled-components";
import { ArchiveLinkProps } from "../../../../interfaces/types";
import TripleIcon from "../../../areCommon/icons/TripleIcon";

export const StyledArchiveLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #e6f0fa;
  border-top: 1px solid #e6f0fa;
  box-sizing: border-box;

  &:last-of-type {
    border-top: none;
  }

  &:hover .archive-link__title {
    color: #50287d;
  }
`;

export const IconСontainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const TitlesContainer = styled.div`
  width: 100%;
  display: block;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    display: flex;
  }
`;

export const Title = styled.p`
  display: block;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #5a646e;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    max-width: 560px;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Subtitle = styled.p`
  width: 125px;
  display: block;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #5a646e;
  margin-left: 0px;

  @media screen and (min-width: 576px) {
    margin-bottom: 0;
    margin-left: 48px;
    text-align: right;
  }
`;

const ArchiveLink: FC<ArchiveLinkProps> = ({ href, title, subtitle }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <StyledArchiveLink
      target="_blank"
      href={href}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      rel="noreferrer"
    >
      <IconСontainer>
        <TripleIcon hovered={isHovered} icon="Pdf" light={false} />
      </IconСontainer>

      <TitlesContainer>
        <Title> {title} </Title>
        <Subtitle> {subtitle} </Subtitle>
      </TitlesContainer>
    </StyledArchiveLink>
  );
};

export default ArchiveLink;
