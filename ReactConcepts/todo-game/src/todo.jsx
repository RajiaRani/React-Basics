import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
    //console.log("we have to add new tesk in todo.");
    setTodos([...todos, newTodo]);
    setNewTodo("");
    }

    let updateTodoValue = (event) => {
        //console.log(event.target)
        setNewTodo(event.target.value);
    }
    return (
        <div>
            <input  placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <br /> <br/>
            <button onClick={addTask}>Add Task</button>
            <br/> <br/> 
            <hr/>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}