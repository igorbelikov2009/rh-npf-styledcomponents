import React, { FC } from "react";
import { NotificsContentProps } from "../../../../interfaces/types";
import { styled } from "styled-components";

export const Paragraph = styled.p`
  display: block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #5a646e;
`;

export const Span = styled.span`
  display: block;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  font-style: normal;
  font-weight: 400;
`;

const NotificsContent: FC<NotificsContentProps> = ({ content, isVisible }) => {
  return (
    <>
      {isVisible && (
        <>
          <Paragraph>
            <Span> {content.date} </Span>

            <Span> {content.description} </Span>
          </Paragraph>
        </>
      )}
    </>
  );
};

export default NotificsContent;
