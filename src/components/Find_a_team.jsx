import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Date_and_Time from "./helper_components/Time_and_date";

const Find_a_team = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle_press = () => {
    navigate("/Choose_sport");
  };

  return <Date_and_Time onButtonClick={handle_press} />;
};

export default Find_a_team;
