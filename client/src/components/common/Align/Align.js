import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// style
import css from "./Align.module.scss";

export const Align = ({ end, children }) => {
  const classes = classNames({
    [css.align]: true,
    [css["align--end"]]: !!end
  });

  return <div className={classes}>{children}</div>;
};

Align.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array)
  ]).isRequired,
  end: PropTypes.bool
};
Align.defaultProps = {
  end: false
};
Align.displayName = "Align";
