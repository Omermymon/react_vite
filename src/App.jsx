import { useState } from "react";
import "./styles/App.css";
import { TextField, Button } from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState();

  const handleAdd = () => {
    setTodos([...todos, currentTodo]); // Add the new todo to the array
    setCurrentTodo(""); // Clear the input field
  };

  return (
    <div>
      <div>
        <TextField
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          placeholder="Enter a todo"
        />
        <Button onClick={handleAdd}>Add Todo</Button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
