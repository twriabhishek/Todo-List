import React, { useEffect, useState } from "react";
import TodosForm from "./TodosForm";
import TodosList from "./TodosList";
import { TodoProvider } from "../context";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    console.log(todos);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>

      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  return (
    <div style={{backgroundColor:"#EEEEEE", height:"100vh"}}>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div style={{textTransform:"capitalize", height:"80vh"}}>
          <TodosForm />
            {todos.map((todo) => (  
                <TodosList key={todo.id} todo={todo}/>
            ))}
        </div>    
      </TodoProvider>
    </div>
  );
};

export default Todos;
