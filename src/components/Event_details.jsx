import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const EventDetail = ({
  location,
  playersNeeded,
  additionalInfo,
  onJoin,
  onBack,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Card sx={{ width: 400, padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Event Details
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Location:</strong> {location || "No location provided"}
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Players Needed:</strong> {playersNeeded || "N/A"}
          </Typography>

          {additionalInfo && (
            <Typography variant="body1" gutterBottom>
              <strong>Additional Info:</strong> {additionalInfo}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 3,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={onJoin}
              sx={{ textTransform: "none" }}
            >
              Join Event
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={onBack}
              sx={{ textTransform: "none" }}
            >
              Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EventDetail;
