import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import BoxWrapper from "./helper_components/Box_wrappers";

const EventDetailsPag = () => {
  const [choose_option, setChooseOption] = useState("");
  const currentTheme = useTheme();
  const navigate = useNavigate();

  const handle_press_team = () => {
    setChooseOption("team");
    navigate("/Choose_sport", { state: { choose_option: "team" } });
  };

  const handle_press_player = () => {
    setChooseOption("player");
    navigate("/Choose_sport", { state: { choose_option: "player" } });
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
        <Button variant="contained" onClick={handle_press_team}>
          Find a team
        </Button>
        <Button variant="contained" onClick={handle_press_player}>
          Find a player
        </Button>
      </Box>
    </BoxWrapper>
  );
};

export default EventDetailsPag;
