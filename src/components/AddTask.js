const AddTask = ({onAdd}) =>{
    return(
     <>
     <div className="input-form">
         <input type="text" className="input-name" placeholder="Enter Task Name"/>
         <input className="input-day" placeholder="Enter Task Duration"/>
         <button className="btn input-button" onClick={onAdd}>Save Task</button>
     </div>
     </>
    )
}

export default AddTask;