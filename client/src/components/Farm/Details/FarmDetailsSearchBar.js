import React, { memo } from "react";

// style
import css from "./FarmDetailsSearchBar.module.scss";

// components
import { Box } from "../../common/Box/Box";

const _FarmDetailsSearchBar = () => (
  <div className={css.searchBar}>
    <Box>SEARCH BAR</Box>
  </div>
);

_FarmDetailsSearchBar.propTypes = {};
_FarmDetailsSearchBar.defaultProps = {};
_FarmDetailsSearchBar.displayName = "FarmDetailsSearchBar";

export const FarmDetailsSearchBar = memo(_FarmDetailsSearchBar);
