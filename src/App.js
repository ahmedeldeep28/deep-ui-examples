import ThemeProvider from "./context/theme-contxt";
import AppRoutes from "./routes/AppRoutes";

function App() {
  // document.documentElement.classList.add("dark");
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
