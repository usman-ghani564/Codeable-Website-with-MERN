import { StrictMode } from "react";
import ReactDOM from "react-dom";

import BaseComponent from "./BaseComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BaseComponent />
  </StrictMode>,
  rootElement
);
