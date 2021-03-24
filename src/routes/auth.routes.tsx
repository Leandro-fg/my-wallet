import React from "react";

import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SingIn/SingIn";
import NewAccount from "../pages/NewAccount";

const routes: React.FC = () => {
  return (
    <Switch>
      <Route component={SignIn} />
      <Route component={NewAccount} path="/register" exact />
    </Switch>
  );
};

export default routes;
