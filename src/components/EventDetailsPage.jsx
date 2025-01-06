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
        Event Details
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Location Field */}
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "600px" }}
          placeholder="Enter specific address or area"
        />

        {/* Number of Players Needed */}
        <TextField
          label="Number of Players Needed"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "600px" }}
          type="number"
          placeholder="E.g., 2 players"
        />

        {/* Event Organizer Info */}
        <TextField
          label="Event Organizer Info"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "600px" }}
          placeholder="Name, contact, etc."
        />

        {/* Additional Info */}
        <TextField
          label="Additional Info"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "600px" }}
          multiline
          rows={4}
          placeholder="Optional: Level of skill, bring equipment, etc."
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            width: "fit-content",
            alignSelf: "center",
          }}
        >
          Post Event
        </Button>
      </Box>
    </BoxWrapper>
  );
};

export default EventDetailsPag;
