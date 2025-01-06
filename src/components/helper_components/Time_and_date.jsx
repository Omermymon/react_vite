import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BoxWrapper from "./Box_wrappers";
import BasicDateCalendar from "./Date";
import BasicTimePicker from "./Time";
import Button from "@mui/material/Button";

export default function Date_and_Time({ onButtonClick }) {
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
          px: 2,
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
              gap: 2,
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <BasicTimePicker label="Start Time" />
            <BasicTimePicker label="Stop Time" />
            <Button variant="contained" color="primary" onClick={onButtonClick}>
              Proceed to Event Details
            </Button>
          </Box>
        </Box>
      </Box>
    </BoxWrapper>
  );
}
