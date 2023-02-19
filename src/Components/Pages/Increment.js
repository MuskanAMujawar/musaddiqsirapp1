import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'



export const Increment = () =>{
    const dispatch = useDispatch()

    const handleIncremet=()=>{
        dispatch({
            type : "COUNT_INCREMENT",
            payload : 1
        })
    }
    return(
        <div>
            <Button variant = "contained" color='success' onClick={handleIncremet}> 
                Increment
            </Button>
        </div>
    )
}