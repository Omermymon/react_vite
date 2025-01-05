import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import BoxWrapper from "./Box_wrappers";
import BasicDateCalendar from "./helper_components/Date";
import BasicTimePicker from "./helper_components/Time";

const Find_a_team = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentTheme = useTheme();
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
        }}
      >
        <Typography variant="h4" component="h3" sx={{ mb: 2, mt: 4 }}>
          Choose Date
        </Typography>
        <BasicDateCalendar />
        <BasicTimePicker />
      </Box>
    </BoxWrapper>
  );
};

export default Find_a_team;