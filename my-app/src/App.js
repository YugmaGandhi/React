import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import Button from './components/Button'

import './App.css';

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors App',
      day: 'feb 5',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'feb 6',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shoping',
      day: 'feb 5',
      reminder: false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = tasks[tasks.length-1].id + 1;
    const newTask = {id, ...task};
    setTask([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task => task.id !== id)))
  }

  //toggling form
  const [formVal,setFormVal] = useState(false)
  const toggleForm = ()=>{
    setFormVal(!formVal)
  }

  const toggleReminder = (id) => {
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
