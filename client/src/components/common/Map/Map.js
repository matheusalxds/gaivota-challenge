import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Map as RLMap, TileLayer, GeoJSON } from "react-leaflet";
import { useHistory, useLocation } from "react-router-dom";

// style
import css from "./Map.module.scss";

import data from "../../../utils/geo/farm_221-2.json";

export const Map = () => {
  const [latitude] = useState(4.687644);
  const [longitude] = useState(-74.211138);

  const history = useHistory();
  const location = useLocation();

  const onClick = event => {
    // onSelect(event.target.feature.properties.field_id);
    history.push(
      `${location.pathname}/${event.target.feature.properties.field_id}/details`
    );
  };

  const handleClick = (farm, layer) => {
    layer.on({
      click: onClick
    });
  };

  return (
    <div className={css.map}>
      <RLMap center={[latitude, longitude]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={data.features} onEachFeature={handleClick} />
      </RLMap>
    </div>
  );
};

Map.propTypes = {
  // onSelect: PropTypes.func
};
Map.defaultProps = {
  // onSelect: f => f
};
Map.displayName = "Map";
