import { useContext } from "react";
import {CountContext} from '../App';

function ComponentD(){

    const ContextData = useContext(CountContext);
    return(
        <>
          <div>
            Componenet D
            <button onClick={()=>ContextData.contextmethod("increment")}>Increment</button>
            <button onClick={()=>ContextData.contextmethod("decrement")}>Decrement</button>
            <button onClick={()=>ContextData.contextmethod("reset")}>Reset</button>
        </div>
        </>
    )
}
export default ComponentD;