import React from "react";
import PropTypes from "prop-types";
import { Bar as BarChart } from "react-chartjs-2";

export const Bar = ({ height, ...props }) => (
  <div style={{ height: `${height}px` }}>
    <BarChart
      {...props}
      width={100}
      height={50}
      options={{
        responsive: true,
        maintainAspectRatio: false
      }}
    />
  </div>
);

Bar.propTypes = {
  height: PropTypes.number
};
Bar.defaultProps = {
  height: 350
};
Bar.displayName = "Bar";
