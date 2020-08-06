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
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import Order from "../pages/Order/Order";
import OnProgress from "../pages/OnProgress/OnProgress";
import History from "../pages/History/History";
import Employee from "../pages/Employee/Employee";
import EmployeeRegister from "../pages/EmployeeRegister/EmployeeRegister";
import AddRoute from "../pages/AddRoute/AddRoute";
import Settings from "../pages/Settings/Settings";
import Destination from "../pages/Destination/Destination";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute
          exact
          path="/employee/register"
          component={EmployeeRegister}
        />
        <PrivateRoute exact path="/employee" component={Employee} />
        <PrivateRoute exact path="/history" component={History} />
        <PrivateRoute
          exact
          path="/destination/:routeId"
          component={Destination}
        />
        <PrivateRoute exact path="/route/add" component={AddRoute} />
        <PrivateRoute exact path="/onprogress" component={OnProgress} />
        <Route exact path="/order/:orderId" component={Order} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
