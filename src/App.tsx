import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputFields from "./components/InputFields";
import { Todo } from "./models/Todo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Todo List</span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.length ? <TodoList todos={todos} setTodos={setTodos} /> : null}
    </div>
  );
};

export default App;
