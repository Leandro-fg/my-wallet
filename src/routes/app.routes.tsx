import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import DashBoard from "../pages/DashBoard/DashBoard";
import List from "../pages/List/List";

const AppsRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/list/:type" exact component={List} />
    </Switch>
  </Layout>
);

export default AppsRoutes;
