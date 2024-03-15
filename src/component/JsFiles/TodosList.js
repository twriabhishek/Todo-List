import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useTodo } from "../context";
import { FaSave } from "react-icons/fa";

const TodosList = ({ todo }) => {
  const [istodoeditable, setistodoeditable] = useState(false);
  const [todomsg, settodomsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todomsg });
    setistodoeditable(!istodoeditable);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
      <main className="main-container"
        style={
          todo.completed
            ? { backgroundColor: "#c6e9a7" }
            : { backgroundColor: "antiquewhite" }
        }
      >
        <div className="left">
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <input
            type="text"
            value={todomsg}
            onChange={(e) => {
              settodomsg(e.target.value);
            }}
            readOnly={!istodoeditable}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              border: istodoeditable ? "2px solid black" : "none",
            }}
          />
        </div>
        <div className="right">
          <button onClick={editTodo}>
            {istodoeditable ? <FaSave /> : <FaEdit />}
          </button>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </main>
  );
};

export default TodosList;
