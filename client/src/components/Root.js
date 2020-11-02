import "react-hot-loader/patch";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./common/App/App";

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;
