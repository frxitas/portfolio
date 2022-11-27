import isObject from "lodash/isObject";
import snakeCase from "lodash/snakeCase";

const theme = {
  borderRadius: {
    default: "10px",
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    primary: {
      900: "#2935cc",
      800: "#195aec",
      700: "#006dff",
      600: "#0081ff",
      500: "#0090ff",
      400: "#00a1ff",
      300: "#4bb3ff",
      200: "#87c9ff",
      100: "#b9ddff",
      50: "#e2f2ff"
    },
    // secondary: {
    //   darkness: "#00244F",
    //   dark: "#0056BD",
    //   default: "#0074FF",
    //   light: "#E8F1FC",
    // },
    // functional: {
    //   darkness: "#15171A",
    //   dark: "#5E6772",
    //   default: "#A7B8CC",
    //   light: "#E9EDF2",
    // },
    // neutral: {
    //   darkness: "#000000",
    //   dark: "#515151",
    //   default: "#BCBCBC",
    //   light: "#F0F0F0",
    // },
    // feedback: {
    //   warning: "#FFB300",
    //   error: "#FA3201",
    //   success: "#00B503",
    // },
  },
  // fonts: {
  //   // primary: "Whyte Inktrap",
  //   // secondary: "Poppins",
  // },
  // fontSizes: {
  //   xxxxs: "1rem",
  //   xxxs: "1.2rem",
  //   xxs: "1.4rem",
  //   xs: "1.6rem",
  //   sm: "2rem",
  //   md: "2.4rem",
  //   lg: "3.2rem",
  //   xl: "4rem",
  //   xxl: "4.8rem",
  //   xxxl: "6.4rem",
  //   display: "8rem",
  //   giant: "9.6rem",
  // },
  // fontWeights: {
  //   regular: 400,
  //   medium: 500,
  //   semiBold: 600,
  //   bold: 700,
  // },
  // lineHeights: {
  //   tight: "100%",
  //   medium: "125%",
  //   distant: "150%",
  //   superDistant: "200%",
  // },
  // sizes: {
  //   button: {
  //     default: "48px",
  //     small: "40px",
  //     table: "30px",
  //   },
  //   iconButton: {
  //     default: "56px",
  //     small: "45px",
  //     dockbar: "35px",
  //     diagram: "25px",
  //   },
  //   icon: {
  //     default: "32px",
  //     small: "30px",
  //     breadCrumb: "20px",
  //   },
  // },
  // spaces: {
  //   px: "1px",
  //   0.5: "0.2rem",
  //   1: "0.4rem",
  //   1.5: "0.6rem",
  //   2: "0.8rem",
  //   2.5: "1rem",
  //   3: "1.2rem",
  //   3.5: "1.4rem",
  //   4: "1.6rem",
  //   5: "2rem",
  //   6: "2.4rem",
  //   7: "2.8rem",
  //   8: "3.2rem",
  //   9: "3.6rem",
  //   10: "4rem",
  //   12: "4.8rem",
  //   14: "5.6rem",
  //   15: "6rem",
  //   16: "6.4rem",
  //   20: "8rem",
  //   24: "9.6rem",
  //   28: "11.2rem",
  //   30: "12rem",
  //   32: "12.8rem",
  //   36: "14.4rem",
  //   40: "16rem",
  //   44: "17.6rem",
  //   48: "19.2rem",
  //   52: "20.8rem",
  //   56: "22.4rem",
  //   60: "24rem",
  //   64: "25.6rem",
  //   72: "28.8rem",
  //   80: "32rem",
  //   96: "38.4rem",
  // },
  // zIndices: {
  //   hide: -1,
  //   auto: "auto",
  //   base: 0,
  //   dockbar: 5,
  //   docked: 10,
  //   dropdown: 1000,
  //   sticky: 1100,
  //   banner: 1200,
  //   overlay: 1300,
  //   modal: 1400,
  //   popover: 1500,
  //   skipLink: 1600,
  //   toast: 1700,
  //   tooltip: 1800,
  //   menu: 1850,
  //   sidebar: 1900,
  // },
};

const themeKeyMap = {
  borderRadius: "borderRadius",
  colors: "color",
  fonts: "font",
  fontSizes: "fontSize",
  fontWeights: "fontWeight",
  lineHeights: "lineHeight",
  sizes: "size",
  spaces: "space",
  zIndices: "zIndex",
};

const getFormattedKey = (key: any) => {
  if (Number(key) && Number(key) !== Math.floor(key)) {
    return `${parseInt(key)}-half`;
  }

  return key;
};

export const generateCSSVarsFromTheme: any = (
  { icons = null, ...themeObj },
  previousKey = null
) => {
  const cssVarsArr = Object.entries(themeObj).map(([key, val]) => {
    if (val && isObject(val)) {
      return generateCSSVarsFromTheme(
        val,
        previousKey
          ? `${themeKeyMap[previousKey] || previousKey}-${getFormattedKey(key)}`
          : getFormattedKey(key)
      );
    } else {
      if (previousKey) {
        return `--${snakeCase(themeKeyMap[previousKey] || previousKey).replace(
          "_",
          "-"
        )}-${getFormattedKey(key)}: ${val};`;
      }

      return `--${snakeCase(getFormattedKey(key)).replace("_", "-")}: ${val};`;
    }
  });

  return cssVarsArr.flat().join("\n");
};

export default theme;
