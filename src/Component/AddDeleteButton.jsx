
import { Button } from '@mui/material'
import React, { useState } from 'react'


export const AddDeleteButton =()=>{
    const [data,setData]=useState(0)

    const handleincrement=(item)=>{
        setData(data+item)
    }
    const handlereset=()=>{
        setData(0)
    }
    // const handledecrement=()=>{
    //     setData(data/2)
    // }
    return (
        <div>
            {/* <Button onClick={()=>setData(data+1)}>inc</Button>
            <h1>count:{data}</h1>
            <Button onClick={()=>setData(data-1)}>dec</Button> */}
            <Button onClick={()=>handleincrement(+1)}>increase</Button>
            <h1>count:{data}</h1>
            <Button onClick={()=>handledecrement(-1)}>dec</Button>
            <Button onClick={()=>handlereset(0)}>reset</Button>
        </div>
    )
}