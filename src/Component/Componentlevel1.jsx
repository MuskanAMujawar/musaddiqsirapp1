import { Button, Grid, Input, TextField } from '@mui/material'
import React, { useState } from 'react'


export const Componentlevel1=()=>{
const [fname,setfname]=useState()
const [lname,setlname]=useState()
const [mname,setmname]=useState()
const [mob,setmob]=useState()
const [add,setadd]=useState()
const [pincode,setpincode]=useState()
const [city,setcity]=useState()
const [state,setstate]=useState()
const [email,setemail]=useState()
const [password,setpassword]=useState()
const [gender,setgender]=useState()

    return(
        <div>
            {/* <Componentlevel2/> */}
            <Grid container spacing={6}>
                <Grid item xs={3}><TextField label="first name" variant='standard' onChange={(a)=>setfname(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="last name" variant='outlined' onChange={(a)=>setlname(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="middle name" variant='filled' onChange={(a)=>setmname(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="mobile number" type="number" onChange={(a)=>setmob(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="address" onChange={(a)=>setadd(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="pincode" onChange={(a)=>setpincode(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="city" onChange={(a)=>setcity(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="state" onChange={(a)=>setstate(a.target.value)}></TextField></Grid>
                <Grid item xs={3}><TextField label="email" type="email" variant="standard" onChange={(a)=>setemail(a.target.value)}></TextField></Grid>
                <Grid item xs={4}><TextField label="password" type="password" variant="outlined" onChange={(a)=>setpassword(a.target.value)}></TextField></Grid>
                <Grid item xs={4}><TextField label="gender" type="text" variant="filled" onChange={(a)=>setgender(a.target.value)}></TextField></Grid>
            </Grid>
                <h4>first name:{fname}</h4>
                <h4>last name:{lname}</h4>
                <h4>middle name:{mname}</h4>
                <h4>mobile number:{mob}</h4>
                <h4>address:{add}</h4>
                <h4>pincode:{pincode}</h4>
                <h4>city:{city}</h4>
                <h4>state:{state}</h4>
                <h4>email:{email}</h4>
                <h4>password:{password}</h4>
                <h4>Gender:{gender}</h4>
                    </div>
    )
}