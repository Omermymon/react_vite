import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tab,
  Tabs,
  Button,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import BoxWrapper from "./helper_components/Box_wrappers";
import { useNavigate } from "react-router-dom";

const mockEvents = {
  future: [
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
  ],
  past: [
    {
      id: 3,
      title: "Volleyball Game",
      date: "2024-12-20",
      location: "The Hague",
    },
    { id: 4, title: "Tennis Meetup", date: "2024-12-15", location: "Utrecht" },
  ],
};

const HomePage = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleSubmit = () => {
    navigate("/home");
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
      </CardContent>
    </Card>
  );

  return (
    <BoxWrapper>
      <Box sx={{ p: 2 }}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          centered
          sx={{ mb: 3 }}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Future Events" />
          <Tab label="Past Events" />
        </Tabs>

        <Box>
          {tab === 0 &&
            (mockEvents.future.length > 0 ? (
              mockEvents.future.map(renderEventCard)
            ) : (
              <Typography>No upcoming events.</Typography>
            ))}
          {tab === 1 &&
            (mockEvents.past.length > 0 ? (
              mockEvents.past.map(renderEventCard)
            ) : (
              <Typography>No past events found.</Typography>
            ))}
        </Box>

        <Button
          color="primary"
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleSubmit}
        >
          Find a player / Create a match
        </Button>
      </Box>
    </BoxWrapper>
  );
};

export default HomePage;
