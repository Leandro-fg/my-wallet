import React, { createContext, useContext, useState } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    sucess: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const savedTheme = localStorage.getItem("@my-wallet:theme");

    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@my-wallet:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@my-wallet:theme", JSON.stringify(dark));
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
