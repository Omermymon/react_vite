import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Facebooklogo from "../assets/facebook.png";
import Googlelogo from "../assets/google.png";
import Applelogo from "../assets/apple.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import BoxWrapper from "./helper_components/Box_wrappers";
import { auth, googleProvidor } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const currentTheme = useTheme();
  const navigate = useNavigate();

  const signUp = async () => {
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      await signInWithEmailAndPassword(auth, username, password); // Log the user in after sign up
      navigate("/Home_Page"); // Redirect to home after successful sign-up & login
    } catch (err) {
      setError(err.message); // Display any error during sign-up or login
    } finally {
      setLoading(false);
    }
  };

  const signInGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvidor);
      navigate("/Home_Page");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting:", { username, password });
    navigate("/Home_Page");
  };

  const socialButtons = [
    { label: "Sign in with Facebook", logo: Facebooklogo, onClick: () => {} },
    { label: "Sign in with Google", logo: Googlelogo, onClick: signInGoogle },
    { label: "Sign in with Apple", logo: Applelogo, onClick: () => {} },
  ];

  return (
    <BoxWrapper>
      <Typography variant="h4" component="h1" sx={{ mb: 4, mt: 4 }}>
        Sign in to MyTeam
      </Typography>

      {/* Social Sign-In Buttons */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        {socialButtons.map(({ label, logo, onClick }) => (
          <Button
            key={label}
            variant="contained"
            fullWidth
            startIcon={
              <img src={logo} alt={label} style={{ width: 20, height: 20 }} />
            }
            sx={{
              backgroundColor: currentTheme.palette.background.paper,
              color: "white",
              "&:hover": { backgroundColor: "#333333" },
              maxWidth: "300px",
              height: 45,
              border: "1px solid grey",
            }}
            onClick={onClick}
            disabled={loading}
          >
            {label}
          </Button>
        ))}
      </Box>

      {/* Sign-Up Form */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          mt: 4,
        }}
      >
        <TextField
          id="username"
          label="Email or username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={signUp}
          sx={{
            backgroundColor: currentTheme.palette.primary.main,
            color: currentTheme.palette.primary.contrastText,
            "&:hover": { backgroundColor: "#1AA541" },
            maxWidth: "300px",
            height: 45,
            mt: 2,
          }}
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </Box>

      {/* Error Message */}
      {error && (
        <Typography variant="body2" sx={{ color: "red", mt: 2 }}>
          {error}
        </Typography>
      )}

      {/* Login Redirect Link */}
      <Typography variant="body2" sx={{ mt: 4, mb: 4, textAlign: "center" }}>
        Have an account?{" "}
        <span
          style={{
            color: currentTheme.palette.primary.main,
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          Log in
        </span>
      </Typography>
    </BoxWrapper>
  );
};

export default Signin;
