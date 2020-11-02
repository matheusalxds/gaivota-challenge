import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// style
import css from "./Box.module.scss";

export const Box = ({ darker, children }) => {
  const classes = classNames({
    [css.box]: true,
    [css["box--darker"]]: !!darker
  });

  return <div className={classes}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]),
  darker: PropTypes.bool
};
Box.defaultProps = {
  darker: false
};
Box.displayName = "Box";
