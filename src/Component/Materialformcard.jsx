import React,{useState} from 'react'
import { Card, CardContent, Grid, TextField } from '@mui/material'
import { height, width } from '@mui/system'
import { Componentlevel3 } from './Componentlevel3'


export const Materialformcard=()=>{
 const[name,setname]=useState()
 const[fname,setfname]=useState()
 const[roll,setroll]=useState()
 const[std,setstd]=useState()
 const[add,setadd]=useState()
 const[pincode,setpincode]=useState()
 const[city,setcity]=useState()
 const[state,setstate]=useState()

// console.log(firstname)

    return (
       <div>
        <h1>8th Class Student Data</h1>
        <Grid container spacing={2}>
            <Grid item xs={4}><TextField label='name of student' variant='outlined' onChange={(a)=>setname(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='fathers name' variant='outlined' onChange={(a)=>setfname(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='Roll no' variant='outlined' onChange={(a)=>setroll(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='standard' variant='outlined' type='number' onChange={(a)=>setstd(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='address' variant='outlined' type='text' onChange={(a)=>setadd(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='pincode' variant='outlined' type='number' onChange={(a)=>setpincode(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='city' variant='outlined' type='text' onChange={(a)=>setcity(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='state' variant='outlined' type='text' onChange={(a)=>setstate(a.target.value)}></TextField></Grid>
            <Grid item xs={6}>
            <Card>
                <CardContent style={{backgroundColor:'wheat'}}>
                   <h3>Name:{name}</h3> 
                    <h3>father name:{fname}</h3>
                    <h3>Roll no:{roll}</h3>
                    <h3>Standard :{std}</h3>
                    <h3>Address :{add}</h3>
                    <h3>pincode :{pincode}</h3>
                    <h3>City :{city}</h3>
                    <h3>State :{state}</h3>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
               </div> 
    )
}