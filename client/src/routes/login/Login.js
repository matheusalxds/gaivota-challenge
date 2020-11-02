import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Login from "../../pages/Login";

const LoginRoutes = () => (
  <Switch>
    <Route path="/" component={Login} />
  </Switch>
);

LoginRoutes.propTypes = {};
LoginRoutes.defaultProps = {};
LoginRoutes.displayName = "LoginRoutes";

export default LoginRoutes;
