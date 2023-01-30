// import ComponentB from './ComponentB';
// function ComponentA(){
//  return(

import { useContext } from "react";
import { CountContext } from '../App';
// import {}


// <ComponentB/>

//  )
// }
// export default ComponentA;

function ComponentA(){

    const ContextData = useContext(CountContext);
    return(
        <>
        <div>
            Componenet A
            <button onClick={()=>ContextData.contextmethod("increment")}>Increment</button>
            <button onClick={()=>ContextData.contextmethod("decrement")}>Decrement</button>
            <button onClick={()=>ContextData.contextmethod("reset")}>Reset</button>
        </div>
       
        </>
    )
}
export default ComponentA; 