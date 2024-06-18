import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: "9E7138",
      },
      // styles for the `a`
      h1: {
        color: "#8C5B72",
      },
    },
  },
});

// const colors = {
//   brand: {
//     900: "#FFFAF3",
//     800: "#8C5B72",
//     700: "#9E7138",
//   },
// };

// const fonts = {
//   body: "Quicksand",
//   heading: "Bodoni Moda",
// };

// const theme = extendTheme({ colors, fonts });

export default theme;
