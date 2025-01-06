import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Date_and_Time from "./helper_components/Time_and_date";

const Create_event = () => {
  const navigate = useNavigate();

  const handle_press = () => {
    navigate("/EventDetailsPag");
  };

  return (
    <>
      <Date_and_Time onButtonClick={handle_press} />
    </>
  );
};

export default Create_event;
