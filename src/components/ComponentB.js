import { UserProvider } from "./useContext";

function ComponentB()
{
    return(
        <UserProvider>
            {
                (username) => {
                   return
                   <h1>hello {username}</h1>
                   
                }
            }
        </UserProvider>
    )
}

export default ComponentB;