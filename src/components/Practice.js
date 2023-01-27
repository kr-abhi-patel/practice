// Class Component
// import React from "react";
// class ClassCompo extends React.Component{
//     render(){
//         return(
//         <>
//         <h1>Hello World</h1>
//         </>
//         )
//     }
// }

import React, { Component, useEffect, useState } from "react";

// export default ClassCompo;

// Create Element using React.createElement

// import React from 'react';
// export default class ClassCompo extends React.Component{
//     render(){
//         return(
//             React.createElement('div',null,"Hello World")
//         )
//     }
// }


//UseState Hooks in Functional Components

// const Practice = () =>{
//     const [data,setData] = useState(0);
//     return(
//         <>
//           <p>{data}</p>
//           <button onClick={()=>setData(data+1)}>Increase Number</button>
//         </>
//     )
// }
// export default Practice;



// UseState in Class Component
// class Practice extends React.Component{
//     constructor()
//     {
//         super();
//         this.state = 
//         {
//             data : 1
//         }
//     }
//     apple()
//     {
//         this.setState({
//             data : this.state.data + 1
//         })
//     }
//     render(){
//         return(
//             <>
//             <h1>{this.state.data}</h1>
//             <button onClick={()=>this.apple()}>Change</button>
//             </>
//         )
//     }
// }

// export default Practice;


// Props with Functional Components
// import Practice_second from './PracticeSecond';
// function Practice(){
//     const [name,setname] = useState("ABC");
//     function ChangeName(value){
//         setname(value)
//     }
//      return(
//        <>
//        <Practice_second name="Abhi"/>
//        <input type="text" onChange={(e)=>ChangeName(e.target.value)}/>
//        </>
//      )
// }

// export default Practice;


// Props With Class Component

// import PracticeSecond from "./PracticeSecond";
// class Practice extends React.Component {
//     render(){
//         return(
//             <>
//             <PracticeSecond name="Abhi"/>
//             </>
//         )
//     }
// }
// export default Practice;

// Form With Validation
// import { useState } from "react";
// function Practice(){
//     const [username,setusername] = useState("");
//     const [err,seterr] = useState(true);
//     function handleForm(e){
//         e.preventDefault();
//         alert("Hello");
//     }
//     function handleUsername(e)
//     {
//         if(e.target.value.length < 3)
//         {
//          seterr(false)
//         }
//         else {
//             seterr(true)
//         }
//     }
//     return(
//         <>
//         <form onSubmit={handleForm}>
//             <input type="text" placeholder="Enter Username" onChange={(e) => handleUsername(e)}/>
//             <h1>
//             {err ? <span></span> : <span>Not a Valid User</span>}
//         </h1>
//             <input type="text" placeholder="Enter Password"/>
//             <input type="submit" placeholder="Submit Form"/>
//         </form>
        
//         </>
//     )
// }

// export default Practice;


// Parse Function As a Props
// import PracticeSecond from './PracticeSecond';
// function Practice(){
//     function getdata(){
//         alert("Hello World");
//     }
//     return(
//         <>
//         <PracticeSecond getdata = {getdata}/>
//         </>
//     )
// }

// export default Practice;



// ComponentdidMount
// class Practice extends React.Component{
//     constructor(){
//         super();
//         console.warn("Hello from Constructor");
//     }
//     componentDidMount()
//     {
//         console.log("Hello from Component Did Mount");
//     }
//     render()
//     {
//         return(
//             console.log("Hello from Render")
//         )
//     }
// }
// export default Practice;




//ComponentDidUpdate

// class Practice extends React.Component{
//     constructor()
//     {
//         super();
//         console.warn("Hello from Constructor");
//         this.state = {
//             count : 0,
//             data : "XYZ"
//         }
//     }
//     componentDidUpdate()
//     {
//         console.log("Hello form Component Did Update")
//     }

//     render()
//     {
//         return(
//             <>
//             <p>{this.state.count}</p>
//             <button onClick={()=>this.setState({count : this.state.count+1})}></button>
//             </>
//         )
//     }
// }

// export default Practice;

//useEffect Hook

// function Practice(){
//     const [data,setData] = useState(0);
//     const [count,setCount] = useState(0);
//     useEffect(()=>{
//         console.warn("UseEffect for Data")
//     },[data])

//     useEffect(()=>{
//         console.warn("Use Effect for Count")
//     },[count])
//     return(
//         <>
//         <p>{data}</p>
//         <button onClick={()=>setData(data+1)}>Add Me</button>
//         <p>{count}</p>
//         <button onClick={()=>setCount(count+1)}>Add Me</button>
//         </>
//     )
// }
// export default Practice


//Map Function use

// function Practice(){
//     const data = [
//         {
//             name : "XYZ"
//         },
//         {
//             name : "ABC"
//         },
//         {
//             name : "PQR"
//         }
//     ]

//     return(
//         <>
//         {
//         data.map((item)=>{
//             return(
//                 <>
//                 <p>{item.name}</p>
//                 </>
//             )
//         })}        
//         </>
//     )
// }
// export default Practice;


// Map Function in Nested Loop 

// function Practice(){
//     const data = [{
//         name : [{
//             first_name : "ABC"
//         },
//         {
//             last_name : "XYZ"
//         },
//         {
//             middle_name : "PQR"
//         }
//     ]
//     }]

//     return(
//         <>
//         {data.map((item)=>{
//             return(
//                 <>
//                 {
//                 console.log(item.name[0].first_name,item.name[1].last_name,item.name[2].middle_name)
               
//                 }
//                 </>

//             )
//         })}
//         </>
//     )
// }

// export default Practice;