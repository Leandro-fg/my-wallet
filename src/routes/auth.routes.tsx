import React from "react";

import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SingIn/SingIn";

const routes: React.FC = () => {
  return (
    <Switch>
      <Route component={SignIn} />
    </Switch>
  );
};

export default routes;
