import React from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "../pages/DashBoard/DashBoard";
import List from "../pages/List/List";

const AppsRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path='/dashboard' exact component={DashBoard}/>
      <Route path='/list/:type' exact component={List}/>
    </Switch>
  );
};

export default AppsRoutes;
