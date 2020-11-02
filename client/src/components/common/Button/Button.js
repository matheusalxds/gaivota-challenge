import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// style
import css from "./Button.module.scss";

const _Button = ({ type, primary, children }) => {
  const classes = classNames({
    [css.button]: true,
    [css["button--primary"]]: !!primary
  });

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
};

_Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  primary: PropTypes.bool,
  type: PropTypes.string
};
_Button.defaultProps = {
  children: null,
  primary: false,
  type: "button"
};
_Button.displayName = "Button";

export const Button = memo(_Button);
