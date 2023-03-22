import { FaTimesCircle } from 'react-icons/fa'

const Task = ({ task , deletefun, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.text || task.task} <FaTimesCircle onClick = {()=>deletefun(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
      <p type='date'>{task.day || task.dt}</p>
    </div>
  )
}

export default Task
