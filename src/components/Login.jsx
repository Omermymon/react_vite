import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Facebooklogo from "../assets/facebook.png";
import Googlelogo from "../assets/google.png";
import Applelogo from "../assets/apple.png";
import { useTheme } from "@mui/material/styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentTheme = useTheme();

  const handleSubmit = () => {
    console.log("Submitting:", { username, password });
  };

  const socialButtons = [
    { label: "Sign in with Facebook", logo: Facebooklogo },
    { label: "Sign in with Google", logo: Googlelogo },
    { label: "Sign in with Apple", logo: Applelogo },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #101212, #596161)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "40%" },
          padding: 2,
          height:"100%",
          backgroundColor: currentTheme.palette.background.paper,
          color: currentTheme.palette.text.primary,
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 4, mt: 4 }}>
          Log in to MyTeam
        </Typography>

        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          {socialButtons.map(({ label, logo }) => (
            <Button
              key={label}
              variant="contained"
              fullWidth
              startIcon={<img src={logo} alt={label} style={{ width: 20, height: 20 }} />}
              sx={{
                backgroundColor: currentTheme.palette.background.paper,
                color: "white",
                "&:hover": { backgroundColor: "#333333" },
                maxWidth: "300px",
                height: 45,
                border: "1px solid grey",
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, alignItems: "center", mt: 4 }}>
          <TextField
            id="username"
            label="Email or username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              backgroundColor: currentTheme.palette.primary.main,
              color: currentTheme.palette.primary.contrastText,
              "&:hover": { backgroundColor: "#1AA541" },
              maxWidth: "300px",
              height: 45,
              mt: 2,
            }}
          >
            Log in
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 4, mb: 4, textAlign: "center" }}>
          Don’t have an account?{" "}
          <span style={{ color: currentTheme.palette.primary.main, cursor: "pointer" }}>Sign up</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
