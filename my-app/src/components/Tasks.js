import Task from './Task';

const Tasks = ({task , onDelete, onToggle }) => {
  

  return (
    <>
      {task.map((el)=>
        (<Task key = {el.id} task = {el} deletefun = {onDelete} onToggle={onToggle}/>)
      )}
    </>
  )
}

export default Tasks
