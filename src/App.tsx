import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const src: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default src;
