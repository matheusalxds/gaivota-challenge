import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// components
import { Farm } from "../../pages/Farm";

const FarmRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}`} component={Farm} />
    </Switch>
  );
};

export default FarmRoutes;

FarmRoutes.propTypes = {};
FarmRoutes.defaultProps = {};
FarmRoutes.displayName = "FarmRoutes";
