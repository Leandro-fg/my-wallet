import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyles from "./styles/GlobalStyles";

const src: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default src;
