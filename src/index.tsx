import React from "react";
import ReactDOM from "react-dom";

import DashBoard from "./pages/DashBoard/DashBoard";
import List from "./pages/List/List";
import SigIn from "./pages/SigIn/SigIn";

ReactDOM.render(
  <React.StrictMode>
    <List />
    <SigIn />
    <DashBoard />
  </React.StrictMode>,
  document.getElementById("root")
);
