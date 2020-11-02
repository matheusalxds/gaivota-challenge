import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// style
import css from "./Spacer.module.scss";

export const Spacer = ({ mtLg, mrLg, inline, children }) => {
  const classes = classNames({
    [css["spacer--inline"]]: !!inline,
    [css[`spacer--mt-lg-${mtLg}`]]: !!mtLg,
    [css[`spacer--mr-lg-${mrLg}`]]: !!mrLg
  });
  return <div className={classes}>{children}</div>;
};

Spacer.propTypes = {
  inline: PropTypes.bool,
  mtLg: PropTypes.number,
  mrLg: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array)
  ]).isRequired
};
Spacer.defaultProps = {
  inline: false,
  mtLg: null,
  mrLg: null
};
Spacer.displayName = "Spacer";
