import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      color: "#fff",
    },
    fontFamily:'Roboto'
  },
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(0,170,255,.05)",
      dark: "rgba(0, 163, 255, 0.04)",
      light: "rgba(0,170,255,.08)",
    },
  },
});
