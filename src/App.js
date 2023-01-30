import logo from './logo.svg';
import './App.css';
// import ComponentA from ".//components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
// import { createContext, useReducer } from 'react';
import FetchData from './components/FetchData';
// import Header from './components/Header';
// import Practice from './components/Practice';
// import { UserProvider } from './components/useContext';
// import Practice2 from './components/Practice2';
// import SpreadOperator from './components/SpreadOperator';
// import MouseMove from './components/MouseMove';
// import PostData from './components/PostData';
// import ComponentA from './components/ComponentA';
// import { createContext } from "react";

// export const CountContext = createContext();
// import { useReducer } from 'react';
// const initialState = 0;
// const reducer = (state,action) =>{
//   switch(action)
// {
//  case "increment" : return state + 1;
//  case "decrement" :  return state - 1 ;
//  case "reset" : return initialState;
//  case "default" : return state;
// }
// }
function App() {

  

  // export const CountContext = createContext();
//   const initialState = {
//     firstcount : 0,
//     secondcount : 0
//   }


//   const [data , setData ] = useReducer(reducer,initialState);


// const [data,setData] = useReducer(reducer,initialState);

  return (
    <div className="App">
      {/* <Header title="Task Tracker"/> */}
      {/* <UserProvider value="xyz">
        <Practice/>
      </UserProvider> */}
      {/* <Practice2/> */}
      {/* <SpreadOperator/> */}
      {/* <MouseMove/> */}
      {/* <PostData/> */}
      {/* <UserContext.Provider value={"visvas"}>
        
      <ComponentA/>
      </UserContext.Provider> */}
      {/* <h1>{data}</h1>
      <button onClick={()=>setData({type : "increment"})}>Increment</button>
      <button onClick={()=>setData({type : "decrement"})}>Decrement</button>
      <button onClick={()=>setData({type : "reset"})}>Reset</button> */}
      {/* <h1>{data}</h1>
        <CountContext.Provider value={{countcontextdata : data, contextmethod : setData}}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </CountContext.Provider> */}
        {/* <FetchData/> */}
    </div>
  );
}

export default App;;
