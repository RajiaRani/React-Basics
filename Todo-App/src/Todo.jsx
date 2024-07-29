import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
export default function Todo() {
    let [addTask, setAddTask] = useState([ { task : "sample task", id: uuidv4()}]); // For ul list
    let [newTask, setNewTask] = useState("");//for input

    let addTaskButton = () => {
    //   console.log("done");
    setAddTask([...addTask, {task : newTask, id: uuidv4()}]);
    setNewTask("");
    }

    let updateTask = (event)  =>{
        setNewTask(event.target.value);
    };

    return (
        <div>
            <h4>Todo Game</h4>
            <input type="text" placeholder="Enter your task here!!"
            value={newTask}
            onChange={updateTask} /> &nbsp; &nbsp;
            <button onClick={addTaskButton}>Add Task</button>
            <hr />
            <h5>Added Task here :</h5>
            <ul>
              {addTask.map((task) => (
              <li key={task.id}> {task.task}</li>))}
            </ul>
        </div>
    )
}