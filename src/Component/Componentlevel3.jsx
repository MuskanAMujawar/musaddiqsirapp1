import { Card, CardContent, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Componentlevel4 } from './Componentlevel4'

export const Componentlevel3=()=>{
    const [name,setname]=useState()
    const[fname,setfname]=useState()
 const[roll,setroll]=useState()
 const[std,setstd]=useState()
 const[add,setadd]=useState()
 const[pincode,setpincode]=useState()
 const[city,setcity]=useState()
 const[state,setstate]=useState()

    return(
        <div>
            <h1>9th class student data</h1>
            <Grid container spacing={4}>
                <Grid item xs={4}><TextField label='name of student' variant='filled' onChange={(a)=>setname(a.target.value)}></TextField></Grid>
                <Grid item xs={4}><TextField label='fathers name' variant='filled' onChange={(a)=>setfname(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='Roll no' variant='filled' onChange={(a)=>setroll(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='standard' variant='filled' type='number' onChange={(a)=>setstd(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='address' variant='filled' type='text' onChange={(a)=>setadd(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='pincode' variant='filled' type='number' onChange={(a)=>setpincode(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='city' variant='filled' type='text' onChange={(a)=>setcity(a.target.value)}></TextField></Grid>
            <Grid item xs={4}><TextField label='state' variant='filled' type='text' onChange={(a)=>setstate(a.target.value)}></TextField></Grid>
             </Grid>
             <Grid item xs={6}>
                <Card>
                    <CardContent style={{backgroundColor:"wheat"}}>
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
        </div>
    )
}