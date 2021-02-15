import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import DashBoard from "./pages/DashBoard/DashBoard";
import List from "./pages/List/List";
import Layout from "./components/Layout";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const src: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <List />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default src;
