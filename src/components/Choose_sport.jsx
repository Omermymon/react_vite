import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";



const Choose_sport = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentTheme = useTheme();

  const ScopedButton = styled(Button)({
    width: "80%",
    borderRadius:"12px",
  });

  

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
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 4, mt: 4 }}>
          Choose your sport
        </Typography>

        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, alignItems: "center",justifyContent: "center", }}>
          <ScopedButton variant="contained" >Soccer</ScopedButton>
          <ScopedButton variant="contained">Basketball</ScopedButton>
          <ScopedButton variant="contained">Hockey</ScopedButton>
          <ScopedButton variant="contained">Tennis</ScopedButton>
          <ScopedButton variant="contained">Volleyball</ScopedButton>
          <ScopedButton variant="contained">Rugby</ScopedButton>
          <ScopedButton variant="contained">Padel</ScopedButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Choose_sport;
