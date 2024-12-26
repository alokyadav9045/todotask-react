import React, { useState } from 'react';
import "./todolist.css";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
  let [tasks, setTasks] = useState([]);
  let [newtasks, setNewtasks] = useState("");

  let addnewtask = () => {
    setTasks([...tasks, { id: uuidv4(), task: newtasks, done: false }]);
    setNewtasks("");
  };

  let deleteTask = (id) => {
    let newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const handleInputChange = (e) => {
    setNewtasks(e.target.value);
  };

  const marktaskdone = (id) => {
    let newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: true };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input className='input' type="text" placeholder="write your task" value={newtasks} onChange={handleInputChange}></input>
      <button className='addbtn' onClick={addnewtask}>Add Task</button>
      <br/><br/><br/><br/>
      <h3 className='heading'>Tasks</h3>
      <ul className='list'>
        {
          tasks.map((task) => {
            return (
              <React.Fragment key={task.id}>
                <li style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.task}
                <button className='dltbtn' onClick={() => deleteTask(task.id)}>Delete</button>
                <button className='dltbtn' onClick={() => marktaskdone(task.id)}>Done</button></li>
              </React.Fragment>
            );
          })
        }
      </ul>
    </div>
  );
}