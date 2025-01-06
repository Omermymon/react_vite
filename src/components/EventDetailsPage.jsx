import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import BoxWrapper from "./helper_components/Box_wrappers";

const EventDetailsPag = () => {
  const [choose_option, setChooseOption] = useState("");
  const currentTheme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Event Created:", { location });
    setDialogOpen(true);

    setTimeout(() => {
      setDialogOpen(false);
      navigate("/home");
    }, 10000);
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
          size="medium"
          onClick={handleSubmit}
          sx={{
            textTransform: "none",
            width: "fit-content",
            alignSelf: "center",
          }}
        >
          Post Event
        </Button>
        <Dialog open={dialogOpen}>
          <DialogTitle>Event Created Successfully!</DialogTitle>
          <DialogContent>
            <Typography>
              Your event has been created and is now visible to other players!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => navigate("/home")} color="primary">
              Back to Home
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </BoxWrapper>
  );
};

export default EventDetailsPag;
