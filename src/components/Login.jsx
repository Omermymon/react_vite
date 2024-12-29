import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Facebooklogo from "../assets/facebook.png";
import googlelogo from "../assets/google.png";
import Applelogo from "../assets/apple.png";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Submitting:", { username, password });
  };

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
          width: { xs: "100%", sm: "70%", md: "40%" },
          padding: 2,
          height: "100vh",
          backgroundColor: "#121212",
          color: "white",
          borderRadius: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: 4,
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Log in to MyTeam
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          {[
            { label: "Sign in with Facebook", logo: Facebooklogo },
            { label: "Sign in with Google", logo: googlelogo },
            { label: "Sign in with Apple", logo: Applelogo },
          ].map(({ label, logo }) => (
            <Button
              key={label}
              variant="contained"
              fullWidth
              startIcon={
                <img src={logo} alt={label} style={{ width: 20, height: 20 }} />
              }
              sx={{
                backgroundColor: "#121212",
                color: "white",
                "&:hover": { backgroundColor: "#333333" },
                borderRadius: "20px",
                width: "100%",
                maxWidth: "300px",
                height: 50,
                border: "1px solid grey",
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <TextField
            id="username"
            label="Email or username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "5px",
              maxWidth: "300px",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: "white",
                padding: "8px",
                "&.Mui-focused": { borderColor: "grey", outline: "none" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              border: "1px solid grey",
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: "#121212",
              color: "white",
              borderRadius: "5px",
              maxWidth: "300px",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: "white",
                padding: "8px",
                "&.Mui-focused": { borderColor: "grey", outline: "none" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              border: "1px solid grey",
            }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#1DB954",
              color: "white",
              "&:hover": { backgroundColor: "#1AA541" },
              width: "100%",
              maxWidth: "300px",
              height: 50,
              marginTop: 2,
              border: "1px solid grey",
            }}
          >
            Log in
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{
            marginTop: 4,
            color: "gray",
            textAlign: "center",
            fontSize: { xs: "0.75rem", sm: "1rem" },
          }}
        >
          Don’t have an account?{" "}
          <span style={{ color: "#1DB954", cursor: "pointer" }}>Sign up</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
