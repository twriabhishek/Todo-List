import React, {useState} from "react";
import { useTodo } from "../context";

const TodosForm = () => {
    const [todo, setTodo] = useState("");
    const {addTodo}=useTodo();

    const add =(e)=>{
        e.preventDefault();
        if(!todo) return
        addTodo({todo, completed:false});
        setTodo("");
    }

  return (
    <div className="todos-container">
      <h1>Manage your Todos</h1>
      <div>
        <input type="text" name="text" id="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default TodosForm;
