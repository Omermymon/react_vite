import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/Login";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Login />
    </ThemeProvider>
  );
}

export default App;
