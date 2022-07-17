import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#2b3445",
      light: "#555d70",
      dark: "#020d1e",
      contrastText: "#ffffff"
    },
    primary: {
      main: "#e53935",
      light: "#ff6f60",
      dark: "#ab000d",
      contrastText: "#ffffff"
    },
  }
});

export default theme;
