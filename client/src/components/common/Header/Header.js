import React from "react";

import css from "./Header.module.scss";

export const Header = () => (
  <header className={css.header}>
    <div className={css["header__logo"]}>
      <span>logo</span>
      <span>Farm xxx</span>
    </div>
    <div className={css["header__login"]}>
      <span>country_region_state_city</span>
      <span>Login</span>
    </div>
  </header>
);

Header.propTypes = {};
Header.defaultProps = {};
Header.displayName = "Header";
