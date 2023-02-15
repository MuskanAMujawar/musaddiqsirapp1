import React,{useState} from 'react'
import { Subabout } from './Subabout'




export const About = () => {
  const [text,settext]=useState("hello world")

  const handlechange= (value)=>{
    settext(value)
  }




  return (
    <div>
        <h1>parent component</h1>
        <input  value={text} onChange={(e)=>settext(e.target.value)} style={{width:"500px" , padding:"20px"}}/>


        <Subabout text={text} handlechange={handlechange}/>
    </div>
  )
}
