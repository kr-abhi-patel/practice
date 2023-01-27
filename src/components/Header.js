import Button from "./Button";
import Task from "./Tasks";
import {useState} from 'react';
import AddTask from "./AddTask";

// functionl components
const Header = ({title}) => {

  const [tasks,setTasks] = useState([
    {
        id : 1,
        name : "Create Header",
        time : "2 Days"
    },
    {
       id : 2,
       name : "Create Button",
       time : "1 Day"
    },
    {
        id : 3,
        name : "Remove Task",
        time : "3 Days"
    },
   
  ])
   const onClick = () =>{
         
      alert("Hello");
   
    }
   const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id != id))
   }

   const onAdd = () =>{
    console.log("Add Task");
   }
return(
    <>
    <div className="form">
        <div className="form-heading">
        <h1 className="heading">{title}</h1>
        <Button text="Add" onClick={onClick}/>
        </div>
        <div className="form-input">
            <AddTask onAdd={onAdd}/>
        </div>
        <div className="form-body">
            <Task tasks={tasks} onDelete={deleteTask} />
        </div>
    </div>
    </>
   )
}

export default Header;