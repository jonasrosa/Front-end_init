import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  colors: {
      gray:{
          "900":"#2b2b2b"
      }
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
