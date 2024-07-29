import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

export default function Todo() {
    let [addTask, setAddTask] = useState([{ task: "sample task", id: uuidv4(), isDone:false }]); // For ul list
    let [newTask, setNewTask] = useState("");//for input

    let addTaskButton = () => {
        //   console.log("done");
        if (newTask.trim() === "") return; // prevent adding empty tasks
        setAddTask([...addTask, { task: newTask, id: uuidv4() }]);
        setNewTask("");
    }

    let updateTask = (event) => {
        setNewTask(event.target.value);
    };

    let deleteAddedTask = (id) => {
        //console.log(id);
        //  let copy = addTask.filter((addTask) => addTask.id != id);
        //  console.log(copy);
        // setAddTask(addTask.filter((addTask) => addTask.id!=id));
        setAddTask(
            (prevAddTask) => addTask.filter(
                (prevAddTask) => prevAddTask.id != id)
        )
    };

    // let UpperCaseAll = () => {
    //     setAddTask((prevAddTask) => 
    //         prevAddTask.map((todo) => {
    //             return {
    //                 ...todo,
    //                 task: todo.task.toUpperCase()
    //             };
    //         })
        
    //     )

    // };
   let AllDone = () => {
      setAddTask( (prevAddTask) =>
      prevAddTask.map((addTask) => {
        return {
            ...addTask,
            isDone: true,
        } ;
      }))
   }

    // let UpperCaseOne = (id) => {
    //    setAddTask( (prevAddTask) => 
    //    prevAddTask.map((addTask) => {
    //     if( addTask.id == id) {
    //         return {
    //             ...addTask,
    //             task : addTask.task.toUpperCase(),
    //         }
    //     } else {
    //         return addTask;
    //     }
    //    })
    //    );
    // };

    let completedTask = (id) => {
        setAddTask(
         addTask.map((addTask) => {
            if(addTask.id == id){
                return {
                    ...addTask,
                    isDone:true,
                }
            }  else {
                return addTask
            }
         })
        );
    }

    return (
        <div className='Todo'>          
            <h2>Todo Tasks</h2>
           
            <div className='upper-Box'>
            <label htmlFor="task">Enter yours tasks</label>
            <input type="text" 
                id="task"
                placeholder="Enter your task here!!"
                value={newTask}
                onChange={updateTask} /> &nbsp; &nbsp;
            <button onClick={addTaskButton}>Add Task</button>
            </div>
            <hr />
            <h5>Your Tasks  :</h5>
            <div className="lower-box">
                {addTask.map(task => (
                    <div 
                        key={task.id}  
                        className="card"  // Changed className from {card} to "card"
                        style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
                    >
                        <span>{task.task}</span>
                        {task.isDone && <FontAwesomeIcon icon={faCheck} />} <br /> <br />
                        <button onClick={() => deleteAddedTask(task.id)}>Delete</button>
                        &nbsp; &nbsp;
                        <button onClick={() => completedTask(task.id)}>
                            {task.isDone ? <FontAwesomeIcon icon={faCheck} /> : 'Done'}
                        </button>
                    </div>
                ))}
            </div>
            {/* <button onClick={UpperCaseAll} className="lowerBtn">UpperCaseAll</button> */}
            <button onClick={AllDone}>All Done</button>
        </div>
)
}