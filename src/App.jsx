import { useState } from "react";
import "./styles/App.css";
import { TextField, Button } from "@mui/material";

function App() {
  const [username, setUsername] = useState("user");
  const [fullname, setFullname] = useState("full name");
  const [age, setAge] = useState("30");
  const [showResults, setShowResults] = useState(false);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFullNameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleClick = () => {
    setShowResults(true);
  };

  return (
    <div>
      <div>
        <h1>Username</h1>
        <TextField value={username} onChange={handleNameChange} />
        <h1>Full name</h1>
        <TextField value={fullname} onChange={handleFullNameChange} />
        <h1>Age</h1>
        <TextField value={age} onChange={handleAgeChange} />
      </div>
      <Button onClick={handleClick}>Press here</Button>

      {showResults && (
        <div>
          <h2>{`Username: ${username}`}</h2>
          <h2>{`Full Name: ${fullname}`}</h2>
          <h2>{`Age: ${age}`}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
