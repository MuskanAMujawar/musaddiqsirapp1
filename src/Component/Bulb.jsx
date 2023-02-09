import React,{useState} from 'react'
import { Button } from '@mui/material'

        export const Bulb = () => {
    const [data,setData]=useState()
    const togglebutton=()=>{
      setInterval(()=>{
        setData(!data)
      },2000)
    }    
    return (
        <div>
       <h1> Bulb Test</h1>
        {data?<img src='./OIP (1).jpg'/> :<img src='./OIP.jpg'/>}
        <br/>
       <Button variant='contained' color='success' onClick={()=>togglebutton()}>ON</Button><br/>
       {/* <Button variant='contained' color='error'onClick={()=>setDa(!da)}>OFF</Button> */}

       <br/> <br/>
    </div>
  )
}

//settimeout 1 second=1000milisecond 
//setinterval repeat