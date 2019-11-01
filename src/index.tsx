import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "typeface-roboto";
import App from "./modules/App";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
