import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Choose_sport from "./components/Choose_sport";
import theme from "./styles/theme";
import Find_a_team from "./components/Find_a_team";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/choose_sport" element={<Choose_sport />} />
        <Route path="/Find_a_team" element={<Find_a_team />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
