import { createMuiTheme } from "@material-ui/core/styles";
//#3f51b5cf headerColor

export const theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#3f51b5",
      main: "#1565c0",
      light: "#ffffffc2",
      contrastText: "#ffffffe8"
    },
    secondary: {
      main: "#e53935",
      light: "#e3dcdc38"
    },
    error: {
      main: "#d32f2f",
      dark: "#B51212",
      light: "#f5c104a8"
    },
    background: {
      default: "#fff"
    },
    common: {
      white: "#fff"
    }
  }
});
