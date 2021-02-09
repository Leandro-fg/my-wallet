import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import DashBoard from "./pages/DashBoard/DashBoard";
import Layout from "./components/Layout";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const src: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <DashBoard />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default src;
