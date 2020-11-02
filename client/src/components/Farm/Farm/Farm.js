import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// style
import css from "./Farm.module.scss";

// components
import { Map } from "../../common/Map/Map";
import { FarmDetails } from "../FarmDetails";
import { Bid } from "../FarmBid";

export const Farm = () => {
  const [selected, setSelect] = useState();

  const { url } = useRouteMatch();

  const handleClick = selectedFarm => setSelect(selectedFarm);

  return (
    <div className={css.farm}>
      <div className={css.farm__map}>
        <Map onSelect={handleClick} />
      </div>
      <Switch>
        <Route path={`${url}/:id/bid`} render={() => <Bid />} />
        <Route
          path={`${url}/:id/details`}
          render={() => <FarmDetails farmId={selected} />}
        />
      </Switch>
    </div>
  );
};

Farm.propTypes = {};
Farm.defaultProps = {};
Farm.displayName = "Farm";
