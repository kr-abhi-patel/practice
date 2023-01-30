import axios from "axios";
import { useEffect, useReducer } from "react";

function FetchData(){
  
 const initialState = {
    loading : true,
    post : {},
    err : ''
 }

 const reducer = (state,action) => {
   switch(action.type){
    case 'FETCH_SUCCESS':
        return {
            loading : false,
            post : action.payload,
            err : ''
        }
    case 'FETCH_ERROR':
        return{
            loading:true,
            post : '',
            err : 'ERROR'
        }
   }
 }
 useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>
    {
        setData({type : 'FETCH_SUCCESS',payload : res.data})
    }).catch(setData({type : 'FETCH_ERROR'}))

 },[])
  const [data,setData] = useReducer(reducer,initialState);
  return(
    
    <h1>{data.post.title}</h1>
    
  )
}

export default FetchData;