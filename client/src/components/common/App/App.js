import React from "react";
import { PropTypes } from "prop-types";

// main routes
import Routes from "../../../routes/Routes";

// style
import css from "./App.module.scss";

const App = () => (
  <div className={css.app}>
    <Routes />
  </div>
);

App.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

export default App;
