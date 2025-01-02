import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentTheme = useTheme();
  const navigate = useNavigate();

const handle_press = () =>{
    navigate("/Choose_sport");
}

  

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #101212,rgb(41, 49, 49))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "70%", md: "40%" },
          padding: 2,
          height:"100%",
          backgroundColor: currentTheme.palette.background.paper,
          color: currentTheme.palette.text.primary,
          borderRadius: {xs:"0px",sm:"20px",md:"20px"},
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 4, mt: 4 }}>
          Ready to play?
        </Typography>

        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, alignItems: "center",justifyContent: "center", }}>
          <Button variant="contained" onClick={handle_press}>Find a team</Button>
          <Button variant="contained">Find a player</Button>

        </Box>
      </Box>
    </Box>
  );
};

export default Home;
