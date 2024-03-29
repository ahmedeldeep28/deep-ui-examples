import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const themeContext = createContext(null);

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "deep-ui-theme",
}) {
  const themeValue = localStorage.getItem(storageKey) || defaultTheme;
  const [theme, setTheme] = useState(themeValue);

  useEffect(() => {
    const root = window.document.documentElement;

    root.setAttribute("class", "");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const updateTheme = (theme) => {
    localStorage.setItem(storageKey, theme);
    setTheme(theme);
  };
  return (
    <themeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProvider;
