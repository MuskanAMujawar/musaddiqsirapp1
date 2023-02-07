import { Button } from "@mui/material";
import React,{useState} from "react";



export const Task =()=>{
    const [data,setData]=useState("")
    const [item,setItem]=useState([])

    const handeleAdd =() =>{
        setItem ((oldItem)=>{
            return( [...oldItem, data]
                )
        })
        setData("")
    }
    return (
        <div className="app">
            <h1>ToDo List</h1>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
            <button onClick={handeleAdd}>+</button>
            <ul type='circle'>
                {item.map((itemval)=>{
                    return <li>{itemval}</li>
                    && <li>{itemval!=" "}</li>
                }).trim()}
            </ul>
        </div>
    )
}