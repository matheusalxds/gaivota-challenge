import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Home from "../../pages/Home";

const HomeRoutes = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

HomeRoutes.propTypes = {};
HomeRoutes.defaultProps = {};
HomeRoutes.displayName = "HomeRoutes";

export default HomeRoutes;
