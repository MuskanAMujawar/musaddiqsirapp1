// import { Button } from "@mui/material";
// import React,{useState} from "react";



// export const Task =()=>{
//     const [data,setData]=useState("")
//     const [item,setItem]=useState([])
//     const [del,setDel]=useState({})

//     const handeleAdd =() =>{
//         setItem ((oldItem)=>{
//             return( [...oldItem, data]
//                 )
//         })
//         setData("")
//     }
//     const handledelete=(itemval)=>{
//         const deldel=data.filter((item)=>item != itemval)
//         setData(deldel)
//     }
//     return (
//         <div className="app">
//             <h1>ToDo List</h1>
//             <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
//             <button onClick={handeleAdd}>+</button>
//             <button onClick={()=>handledelete(itemval)}>delete</button>
//             <ul type='circle'>
//                 {data.map((itemval)=>{
//                     return <li>{itemval}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }