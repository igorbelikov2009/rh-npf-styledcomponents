import { ITypography } from "../interfaces/typesTypography";

/* Typography */
export const typography: ITypography = {
  textСolor: {
    white: "#ffffff",
    whiteDark: "#b5bdc8",
    black: "#000000",
    gray1: "#78828c",
  },

  colors: {
    primary: "#7986cb",
    primaryDark: "#5c6bc0",
    primaryLight: "#9fa8da",
    secondary: "#2b2b2b",
    secondaryDark: "#1f1f1f",
    secondaryLight: "	#383838",
    success: "#4caf50",
    successDark: "#43a047",
    successLight: "#66bb6a",
    danger: "#f44336 ",
    dangerDark: "#e53935",
    dangerLight: "#ef5350 ",

    white: "#E5E4E8",
    black: "#19191B",

    error: "#f46666",
    overlay: "#383838",

    bg: "#E5E4E8",
    font: "#19191B",
  },

  // Source: https://getbootstrap.com/docs/4.0/layout/grid/
  media: {
    extraLarge: "(min-width: 1160px)",
    large: "(min-width: 960px)",
    medium: "(min-width: 768px)",
    small: "(min-width: 576px)",
  },
};
