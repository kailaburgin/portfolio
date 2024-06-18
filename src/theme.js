import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      // green/blue
      // 100: "#EEC7BE",
      // 200: "#E2B055",
      // 300: "#FFECD8",
      // 400: "#F0F2CF",
      // 500: "#DCF4F7",
      // 600: "#00515B",
      // 700: "#FFFAF3",
      100: "#EFD6D0",
      200: "#F1E4D4",
      300: "#D3A166",
      400: "#D3CBD2",
      500: "#332924",
    },
  },
  fonts: {
    body: "sans-serif",
    heading: "serif",
    mono: "serif",
  },
});

export default theme;
