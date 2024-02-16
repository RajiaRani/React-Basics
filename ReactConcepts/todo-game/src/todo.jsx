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

    let deleteTodo=(id)=> {
    setTodos (todos.filter((todo) => todo.id != id))
    };

    let upperCase = () => {
        setTodos( (todos) =>
          todos.map((todo) => {
          return {
             ...todo,
             task:todo.task.toUpperCase()
          };
        })
    );
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
                    &nbsp;&nbsp;&nbsp;
                    <span><button onClick={() => deleteTodo(todo.id)}>Delete</button></span> &nbsp;
                    <span><button>Uppercase one</button></span>
                    </li>
                ))}
            </ul>
            <br /> <br />
            <button onClick={upperCase}>Uppercase</button>
        </div>
    )
}