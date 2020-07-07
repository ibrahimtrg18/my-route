import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import History from "../pages/History/History";
import Employee from "../pages/Employee/Employee";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/settings" component={} />
          <Route exact path="/employee/register" component={} /> */}
        <PrivateRoute exact path="/employee" component={Employee} />
        <PrivateRoute exact path="/history" component={History} />
        {/* <Route exact path="/destination" component={} />
          <Route exact path="/route" component={} /> */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
