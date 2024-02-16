import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample task", id:uuidv4(), isDone:false} ]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
    //console.log("we have to add new tesk in todo.");
    //passing the callback
    setTodos((prevTodo) => {
        return [...todos, { task: newTodo, id: uuidv4(), isDone: false}];
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

    let upperCaseOne = (id) => {
        //console.log("one")
        setTodos ((todos) => 
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task:todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        )
    };


    let markDone = (id) => {
       setTodos ( (todos) =>
        todos.map((todo) => {
            if(todo.id == id) {
                return {
                    ...todo,
                    isDone:true,
                };
            } else {
                return todo;
            }
        })
    )
    };

    let markedAll = () => {
        setTodos( (todos) =>
        todos.map((todo) => {
        return {
           ...todo,
           isDone:true,
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
                    <span style={todo.isDone ? {textDecoration:"line-through"}: {}}>{todo.task}</span> 
                    &nbsp;&nbsp;&nbsp;
                    <span><button onClick={() => deleteTodo(todo.id)}>Delete</button></span> &nbsp;
                    <span><button onClick={() => upperCaseOne(todo.id)}>Uppercase one</button></span> &nbsp;
                    <span><button onClick={() => markDone(todo.id)}>Marked</button></span>
                    </li>
                ))}
            </ul>
            <br /> <br />
            <button onClick={upperCase}>Uppercase</button>
            <button onClick={markedAll}>Marked All</button>
        </div>
    )
}