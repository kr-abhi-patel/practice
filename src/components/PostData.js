import axios from 'axios';
import { useState,useDeferredValue, useEffect } from 'react';
function PostData() {
    
    const [post,setPost] = useState([]);
 
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>setPost(res.data))
    });


    return(
 
     
        post.map((item)=>
        <>
           <h1>{item.title}
        </h1>
        
        </>
     
        )

     
      
    )
}
export default PostData;