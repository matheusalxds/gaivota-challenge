import React from "react";
import PropTypes from "prop-types";

import css from "./Content.module.scss";

export const Content = ({ children }) => (
  <div className={css.content}>{children}</div>
);

Content.propTypes = {
  children: PropTypes.instanceOf(Object)
};
Content.defaultProps = {};
Content.displayName = "Content";
