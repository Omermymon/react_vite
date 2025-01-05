import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import BoxWrapper from "./Box_wrappers";
import BasicDateCalendar from "./helper_components/Date";
import BasicTimePicker from "./helper_components/Time";

const Find_a_team = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle_press = () => {
    navigate("/Choose_sport");
  };

  return (
    <BoxWrapper>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          px: 2, // Padding for better mobile spacing
        }}
      >
        <Typography variant="h4" component="h3" sx={{ mb: 2, mt: 4 }}>
          Choose Game Time
        </Typography>
        <BasicDateCalendar />
        <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2, // Adjust gap to ensure enough space
              justifyContent: "center", // Center the time pickers
              width: "100%", // Ensure the container spans the full width
              flexWrap: "wrap", // Allow wrapping on small screens
            }}
          >
            <BasicTimePicker label={"Start Time"} />
            <BasicTimePicker label={"Stop Time"} />
          </Box>
        </Box>
      </Box>
    </BoxWrapper>
  );
};

export default Find_a_team;
