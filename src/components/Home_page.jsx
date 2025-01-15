import React, { useState, useEffect } from "react";
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
import { db, auth } from "../services/firebase";
import { getDocs, collection } from "firebase/firestore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { renderEventCard } from "./helper_components/Render_card";

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
  const [futureEvents, setFutureEvents] = useState([]);
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const futureEventsRef = collection(db, "futureevents");

  useEffect(() => {
    const getfutureEvents = async () => {
      try {
        const data = await getDocs(futureEventsRef, {
          userId: auth?.currentUser.uid,
        });
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFutureEvents(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getfutureEvents();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleSubmit = () => {
    navigate("/home");
  };

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
            (futureEvents.length > 0 ? (
              futureEvents.map(renderEventCard)
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
