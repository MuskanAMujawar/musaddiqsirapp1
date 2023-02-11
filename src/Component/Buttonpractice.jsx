import { Button } from '@mui/material'
import { yellow } from '@mui/material/colors'
import { style } from '@mui/system'
import React,{useState} from 'react'

export const Buttonpractice = () => {
    const [data,setdata]=useState()
    setdata(data)
    
  return (
    <div>
        <h1 sx={{bgcolor:data}}>{data}</h1>
        <Button variant='outlined' onClick={()=>setdata('red')} >1</Button>
        <Button variant='outlined' onClick={()=>setdata('yellow')}>1</Button>
    </div>
  )
}
