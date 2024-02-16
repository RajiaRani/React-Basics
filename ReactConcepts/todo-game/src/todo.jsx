import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample task", id:uuidv4()} ]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
    //console.log("we have to add new tesk in todo.");
    //passing the callback
    setTodos((prevTodo) => {
        return [...todos, { task: newTodo, id: uuidv4()}];
    });
    setNewTodo("");
    }

    let updateTodoValue = (event) => {
        //console.log(event.target)
        setNewTodo(event.target.value);
    }
    return (
        <div>
            <input 
             placeholder="add a task" 
             value={newTodo} 
             onChange={updateTodoValue} />
            <br /> <br/>
            <button onClick={addTask}>Add Task</button>
            <br/> <br/> 
            <hr/>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span>{todo.task}</span>
                    <span><button>Delete</button></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}