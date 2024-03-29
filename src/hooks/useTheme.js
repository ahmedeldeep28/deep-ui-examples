import { useContext } from "react";
import { themeContext } from "../context/theme-contxt";

function useTheme() {
  const context = useContext(themeContext);

  return context;
}

export default useTheme;
