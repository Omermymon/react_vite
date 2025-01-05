import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        label="Pick Time"
        slotProps={{
          leftArrowIcon: { sx: { color: "white" } },
          rightArrowIcon: { sx: { color: "white" } },
        }}
      />
    </LocalizationProvider>
  );
}
