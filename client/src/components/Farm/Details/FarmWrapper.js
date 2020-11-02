import React from "react";
import PropTypes from "prop-types";

// style
import css from "./FarmWrapper.module.scss";

export const FarmWrapper = ({ children }) => (
  <div className={css.farmWrapper}>{children}</div>
);
FarmWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array)
  ])
};
FarmWrapper.defaultProps = {
  children: null
};
FarmWrapper.displayName = "FarmWrapper";
