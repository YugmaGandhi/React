import { useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import Button from './components/Button'

import './App.css';

function App() {
  const [tasks, setTask] = useState([])

  //fetch tasks 
useEffect(()=>{
  const getTasks = async ()=>{
    const tasksFromServer = await fetchTasks();
    setTask(tasksFromServer);
  }

  getTasks();
},[])

const fetchTasks = async ()=> {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();

  return data;
};

const fetchTask = async (id)=> {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();

  return data;
};

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    // const id = tasks[tasks.length-1].id + 1;
    // const newTask = {id, ...task};
    setTask([...tasks, data])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    })

    setTask(tasks.filter((task => task.id !== id)))
  }

  //toggling form
  const [formVal,setFormVal] = useState(false)
  const toggleForm = ()=>{
    setFormVal(!formVal)
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTask(tasks.map((task)=>{
      if(task.id === id){
        return {...task, reminder:!task.reminder};
      }
      return task;
    }))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Button color={formVal? 'green': 'red'} text={formVal? 'Add' : 'Close'} onToggleForm={toggleForm}/>
      <AddTask onAdd = {addTask} formvalue = {formVal}/>
      {tasks.length ? <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No task"}
    </div>
  );
}

export default App;
