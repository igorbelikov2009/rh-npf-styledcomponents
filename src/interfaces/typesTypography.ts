import FlattenSimpleInterpolation from "styled-components";

export interface ITypography {
  textСolor: {
    white: string;
    whiteDark: string;
    black: string;
    gray1: string;
  };

  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;
    success: string;
    successDark: string;
    successLight: string;
    danger: string;
    dangerDark: string;
    dangerLight: string;

    error: string;
    overlay: string;

    white: string;
    black: string;

    bg: string;
    font: string;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
}

export type StyledVariants<E extends string | number> = {
  [key in E]?: typeof FlattenSimpleInterpolation;
};
