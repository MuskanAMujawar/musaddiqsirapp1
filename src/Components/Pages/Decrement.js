import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'


export const Decrement = ()=>{
    const dispatch = useDispatch()
    const select =useSelector((state)=>state)
    const count=select.CountReducer.count
    
    const handleDecrement=()=>{
        dispatch({
            type : "COUNT_DECREMENT",
            payload : 1
        })
    }
    return (
            <div>
                <Button variant = "contained" color="error" onClick={handleDecrement} disabled={0}>
                    Decrement
                </Button>
            </div>
    )
}