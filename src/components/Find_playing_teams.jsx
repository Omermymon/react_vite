import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import BoxWrapper from "./helper_components/Box_wrappers";
import MapComponent from "./helper_components/Mape";

const Find_playing_teams = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentTheme = useTheme();
  const navigate = useNavigate();

  const handle_press = () => {
    navigate("/Choose_sport");
  };

  return (
    <BoxWrapper>
      <Typography variant="h4" component="h1" sx={{ mb: 4, mt: 4 }}>
        Ready to play?
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MapComponent />
      </Box>
    </BoxWrapper>
  );
};

export default Find_playing_teams;
