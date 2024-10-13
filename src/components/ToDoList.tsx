import { useState } from "react";
import { ToDoInput } from "./ToDoInput";

import heartFill from "../assets/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import heartNoFill from "../assets/favorite_24dp_FILL1_wght400_GRAD0_opsz24.svg";

export const ToDoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [hearts, setHearts] = useState<boolean[]>([]);

  const handleNewToDo = (text: string) => {
    setTodos([...todos, text]);
    setHearts([...hearts, false]); // Füge einen neuen Herz-Status für das neue ToDo-Element hinzu
  };

  const toggleHeart = (index: number) => {
    const newHearts = hearts.slice();
    newHearts[index] = !newHearts[index];
    setHearts(newHearts);
  };

  return (
    <>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            {todo}
            <img
              src={!hearts[index] ? heartFill : heartNoFill}
              alt="heart"
              onClick={() => toggleHeart(index)}
              style={{ cursor: "pointer" }}
            />
          </li>
        ))}
      </ul>
      <ToDoInput onAdd={handleNewToDo} />
    </>
  );
};
