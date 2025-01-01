import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1DB954",
      contrastText: "#ffffff",
    },
    background: {
      default: "#101212",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "gray",
    },
  },
  typography: {
    fontSize: 14,
    h4: {
      fontWeight: "bold",
      fontSize: "2rem",
      textAlign: "center",
    },
    body2: {
      color: "gray",
      fontSize: "0.9rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          maxWidth: "300px",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;
