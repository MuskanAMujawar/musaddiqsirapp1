import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'


export const Schoolformrevise=()=>{
    const [name,setName]=useState()
    const [mobile,setMobile]=useState()
    const [city,setCity]=useState()
    const [pincode,setPincode]=useState()
    const [email,setEmail]=useState()
    const [state,setState]=useState()
    const [data,setdata]=useState([



    ])

    const handleSubmit=()=>{
        const obj={
            firstname:name,
            mobilenumber:mobile,
            Propercity:city,
            Properpincode:pincode,
            Properemail:email,
            Properstate:state
        }
        setdata([...data,obj])
        console.log(data)
    }
    return(
        <div>
            <Grid container spacing={4} style={{backgroundColor:'wheat',color:'white'}}>
                <Grid item xs={4}>
                    <TextField label='name' onChange={(a)=>setName(a.target.value)}></TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField label='mobile number' type='number' onChange={(a)=>setMobile(a.target.value)}></TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField label='city' onChange={(a)=>setCity(a.target.value)}></TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField label='pincode' type='number' onChange={(a)=>setPincode(a.target.value)}></TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField label='email id' type='email' onChange={(a)=>setEmail(a.target.value)}></TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField label='state' onChange={(a)=>setState(a.target.value)}></TextField>
                </Grid>
            </Grid>
                <Grid item xs={6}></Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='success' onClick={handleSubmit}>SUBMIT</Button>
                    </Grid>

                    <Grid container>
                        {data.map((item)=>{
                            return(
                                <Grid item xs={3}>
                                    <Card>
                                        <CardContent style={{backgroundColor:'navajowhite', color:'white'}}>
                                                <h1>name:{item.firstname}</h1>
                                                <h1>mobile:{item.mobilenumber}</h1>
                                                <h1>city:{item.propercity}</h1>
                                                <h1>pincode:{item.Properpincode}</h1>
                                                <h1>email:{item.Properemail}</h1>
                                                <h1>state:{item.Properstate}</h1>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
            <h1>Name:{name}</h1>
            <h1>Mobile Number:{mobile}</h1>
            <h1>City:{city}</h1>
            <h1>Pincode:{pincode}</h1>
            <h1>Email:{email}</h1>
            <h1>State:{state}</h1>
        </div>
    )
}