import React,{useState} from "react";



export const Counter = ()=>{
    const [count,setcount]=useState(0)


    
    return(
        <div>
            <h1>counter</h1>
            <h1>{count}</h1>
            
        </div>
    )
}