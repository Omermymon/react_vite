import React from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";

export const renderEventCard = (event) => (
  <Card
    key={event.id}
    variant="outlined"
    sx={{
      mb: 2,
      p: 2,
      borderRadius: 2,
      boxShadow: 3,
    }}
  >
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {`${event.title} ${event.sportType} match`}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {event.date}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
        <LocationOnIcon fontSize="small" />
        <Typography variant="body2">{event.location}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
        <AccessTimeIcon fontSize="small" />
        <Typography variant="body2" color="text.secondary">
          {`Start: ${
            event.startTime
              ? new Date(event.startTime.toDate()).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })
              : "Unknown"
          }`}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
        <AccessTimeIcon fontSize="small" />
        <Typography variant="body2" color="text.secondary">
          {`Stop: ${
            event.endTime
              ? new Date(event.endTime.toDate()).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })
              : "Unknown"
          }`}
        </Typography>
      </Stack>
      {event.playersNeeded && (
        <Stack direction="row" alignItems="center" spacing={1}>
          <PeopleIcon fontSize="small" />
          <Typography variant="body2">
            {`We need ${event.playersNeeded} more player(s)`}
          </Typography>
        </Stack>
      )}
    </CardContent>
  </Card>
);
