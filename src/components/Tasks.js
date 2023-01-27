import Task from "./Task";
const Tasks = ({tasks , onDelete }) =>{
   return(
    <>
    {
         tasks.map((task) => {
        
            return(<>
            <Task task={task} onDelete={onDelete}/>
            {/* <h3 id={task.id}>{task.name}</h3> */}
            </>)
    })
}
    </>
 
    )
   }
   


export default Tasks;