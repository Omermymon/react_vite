import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import BoxWrapper from "./helper_components/Box_wrappers";
import Soccer from "../assets/sports/soccer.png";
import Basketball from "../assets/sports/basketball.png";
import Rugby from "../assets/sports/rugby.png";
import Tennis from "../assets/sports/tennis.png";
import Volleyball from "../assets/sports/volleyball.png";
import Padel from "../assets/sports/padel.png";
import Hockey from "../assets/sports/hockey.png";
import { useLocation } from "react-router-dom";

const Choose_sport = () => {
  const location = useLocation();
  const { choose_option } = location.state || {};
  const currentTheme = useTheme();
  const navigate = useNavigate();

  const handle_press = () => {
    if (choose_option === "team") {
      navigate("/Find_a_team");
    } else {
      navigate("/Create_event");
    }
  };

  const ScopedButton = styled(Button)({
    width: "60%",
    borderRadius: "12px",
  });
  const sports = [
    { name: "Soccer", img: Soccer },
    { name: "Basketball", img: Basketball },
    { name: "Hockey", img: Hockey },
    { name: "Tennis", img: Tennis },
    { name: "Volleyball", img: Volleyball },
    { name: "Rugby", img: Rugby },
    { name: "Padel", img: Padel },
  ];

  return (
    <BoxWrapper>
      <Typography variant="h4" component="h1" sx={{ mb: 4, mt: 4 }}>
        Choose your sport
      </Typography>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {sports.map((sport) => (
          <ScopedButton
            key={sport.name}
            variant="contained"
            onClick={handle_press}
            sx={{
              display: "flex",
              justifyContent: "flex-start", // Ensure the content is aligned to the left
              alignItems: "center", // Align items vertically centered
              width: "70%",
              textAlign: "center", // Ensure the text is centered
            }}
          >
            <img
              src={sport.img}
              alt={sport.name}
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <Box sx={{ flexGrow: 1, textAlign: "center", marginRight: "22px" }}>
              {" "}
              {sport.name}
            </Box>
          </ScopedButton>
        ))}
      </Box>
    </BoxWrapper>
  );
};

export default Choose_sport;
