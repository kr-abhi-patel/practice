
// import { UserContext } from "../App";

import ComponentD from "./ComponentD";

// function ComponentB()
// {
//     return(
//       <>
//       <UserContext.Consumer>
//         {
//             user=>{
//                 return <div>{user}</div>
//             }
//         }
//       </UserContext.Consumer>
//       </>
//     )
// }

// export default ComponentB;

function ComponentB(){
    return(
        <>
        <ComponentD/>
        </>
    )
}
export default ComponentB;

