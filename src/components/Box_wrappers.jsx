import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BoxWrapper = ({ children }) => {
  const currentTheme = useTheme();

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
          height: "100%",
          backgroundColor: currentTheme.palette.background.paper,
          color: currentTheme.palette.text.primary,
          borderRadius: { xs: "0px", sm: "20px", md: "20px" },
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BoxWrapper;
