import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles/index";
import theme from "./globalStyles/theme";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
