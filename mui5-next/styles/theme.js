import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#00695c',
      light: '#439889',
      dark: '#003d33'
    },
    secondary: {
      main: '#f5f5f5',
      light: '#fff',
      dark: '#c1c1c1'
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontFamily: "Pacifico"
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;