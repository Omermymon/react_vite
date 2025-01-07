import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import BoxWrapper from "./helper_components/Box_wrappers";
import { useNavigate } from "react-router-dom";

const mockEvents = [
  {
    id: 1,
    title: "5v5 Soccer Match",
    date: "2025-01-10",
    location: "Amsterdam",
    playersNeeded: 2,
  },
  {
    id: 2,
    title: "Basketball Practice",
    date: "2025-01-15",
    location: "Rotterdam",
    playersNeeded: 3,
  },
  { id: 3, title: "Tennis Meetup", date: "2024-12-10", location: "Amsterdam" },
];

const FindEvents = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const results = mockEvents.filter((event) =>
      event.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredEvents(results);
  };

  const handleJoinEvent = (event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  const renderEventCard = (event) => (
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
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {event.date}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{event.location}</Typography>
        </Stack>
        {event.playersNeeded && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <PeopleIcon fontSize="small" />
            <Typography variant="body2">
              {`We need ${event.playersNeeded} more player(s)`}
            </Typography>
          </Stack>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => handleJoinEvent(event)}
        >
          Join Match
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <BoxWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
          mt: "20%",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Ente location"
          variant="outlined"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(renderEventCard)
        ) : (
          <Typography color="text.secondary">No events found.</Typography>
        )}
      </Box>

      {/* Dialog for Joining Match */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Match Joined Successfully!</DialogTitle>
        <DialogContent>
          <Typography>
            You have successfully joined the event:{" "}
            <strong>{selectedEvent?.title}</strong>. Have fun!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate("/Home_Page")} color="primary">
            Back to Home
          </Button>
        </DialogActions>
      </Dialog>
    </BoxWrapper>
  );
};

export default FindEvents;
