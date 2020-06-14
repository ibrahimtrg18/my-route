import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles/index";
import theme from "./globalStyles/theme";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {/* <Route exact path="/settings" component={} />
          <Route exact path="/employee/register" component={} />
          <Route exact path="/employee" component={} />
          <Route exact path="/history" component={} />
          <Route exact path="/onprogress/destination" component={} />
          <Route exact path="/onprogress/route" component={} />
          <Route exact path="/onprogress" component={} />*/}
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={SignIn} /> 
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
