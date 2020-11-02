import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import { isAuthenticated } from "../../../auth";

const Authentication = props => {
  const { location, children } = props;
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Authenticates user and set state variables
   * @function authUser
   */
  const authUser = async () => {
    try {
      await isAuthenticated();
      setLogged(true);
      setLoading(false);
    } catch (err) {
      setLogged(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    authUser().then();
  }, []);

  if (loading) return null;

  const isRoot =
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname === "/app" ||
    location.pathname === "/app/";

  if (!logged && location.pathname.indexOf("login") === -1) {
    return <Redirect to="/login" />;
  }

  if (isRoot) {
    return <Redirect to="/app/home" />;
  }

  return children;
};

Authentication.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(Authentication);
