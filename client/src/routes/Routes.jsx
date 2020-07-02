import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Employee from "../pages/Employee/Employee";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/settings" component={} />
          <Route exact path="/employee/register" component={} /> */}
        <Route exact path="/employee" component={Employee} />
        {/* <Route exact path="/history" component={} />
          <Route exact path="/destination" component={} />
          <Route exact path="/route" component={} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
