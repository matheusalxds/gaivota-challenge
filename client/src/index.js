import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Root from "./components/Root";
import * as serviceWorker from "./serviceWorker";

// import global styles
import "./styles/main.scss";

const root = document.getElementById("root");

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NewRoot = require("./components/Root").default;
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      root
    );
  });
}

serviceWorker.unregister();
