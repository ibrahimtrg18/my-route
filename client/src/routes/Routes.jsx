import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/settings" component={} />
          <Route exact path="/employee/register" component={} />
          <Route exact path="/employee" component={} />
          <Route exact path="/history" component={} />
          <Route exact path="/onprogress/destination" component={} />
          <Route exact path="/onprogress/route" component={} />
          <Route exact path="/onprogress" component={} />*/}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
