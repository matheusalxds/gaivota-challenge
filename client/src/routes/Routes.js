import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { PropTypes } from "prop-types";

// routes
// import Home from "./home/Home";
import FarmRoutes from "./farm/Farm";
import Login from "./login/Login";

// components
import Authentication from "../components/common/Authentication/Authentication";
import { Header } from "../components/common/Header/Header";
import { Main } from "../components/common/Main/Main";

const App = props => {
  const { match } = props;

  return (
    <Authentication>
      <Header />
      <Main>
        <Switch>
          <Route path={"/app/home"} component={FarmRoutes} />
          {/*<Route path={`${match.url}app/home`} component={Home} />*/}
          <Route exact path={`${match.url}login`} component={Login} />
        </Switch>
      </Main>
    </Authentication>
  );
};

App.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(App);
