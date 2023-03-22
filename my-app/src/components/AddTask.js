import { useState } from "react"

const AddTask = ({onAdd, formvalue}) => {
    const [task,setTask] = useState('');
    const [dt,setDT] = useState(''); 
    const [reminder,setReminder] = useState(false);

const isHidden = formvalue;

const onSubmit = (e)=>{
    e.preventDefault();

    if(!task){
        alert('Please add task');
        return;
    }

    onAdd({ task, dt, reminder});
     setTask('');
     setDT('');
     setReminder(false);
}    
  return (
    <form className="add-form" onSubmit={onSubmit} hidden={isHidden}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Task" value={task} onChange={(e)=>setTask(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Date and Time</label>
            <input type='datetime-local' placeholder="Add Date and Time" value={dt} onChange={(e)=>setDT(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input checked={reminder} type='checkbox' value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className="btn btn-block"/>
    </form>
  )
}

export default AddTask
