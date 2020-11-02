import React from "react";
import PropTypes from "prop-types";

import css from "./Main.module.scss";

export const Main = ({ children }) => (
  <main className={css.main}>{children}</main>
);

Main.propTypes = {
  children: PropTypes.instanceOf(Object)
};
Main.defaultProps = {};
Main.displayName = "Main";
