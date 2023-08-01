import React from "react";

export interface MenuLinkProps {
  children: string;
  to: string;
  isBackgroundWhite?: boolean;
}
export interface FooterLinkProps {
  children: React.ReactNode;
  to: string;
}
