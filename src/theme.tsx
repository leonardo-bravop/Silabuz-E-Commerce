import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#1d23f8",
      light: "#7453ff",
      dark: "#0000c3",
      contrastText: "#000000"
    },
    primary: {
      main: "#  e53935",
      light: "#ff6f60",
      dark: "#ab000d",
      contrastText: "#ffffff"
    },
  }
});

export default theme;
