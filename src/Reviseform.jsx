import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const Reviseform = () => {
  return (
    <div className='formm'>
      <Grid container spacing={8}>
        <Grid item xs={4}><TextField label="First Name"></TextField></Grid>
        <Grid item xs={4}><TextField label="Middle Name"></TextField></Grid>
        <Grid item xs={4}><TextField label="Last Name"></TextField></Grid>
        <Grid item xs={4}><TextField label="Mobile No" type="number"></TextField></Grid>
        <Grid item xs={4}><TextField label="Email ID" type="email"></TextField></Grid>
        <Grid item xs={4}><TextField label="password" type="password"></TextField></Grid>
        <Grid item xs={4}><TextField label="Time" type="Time"></TextField></Grid>
        <Grid item xs={4}><TextField label="week" type="week"></TextField></Grid>
        <Grid item xs={4}><TextField label="color" type="color"></TextField></Grid>
        <Grid item xs={4}><TextField label="Range" type="range"></TextField></Grid>
        <Grid item xs={4}><TextField label="search box" type="search"></TextField></Grid>
        <Grid item xs={4}><TextField label="file" type="file"></TextField></Grid>
        <Grid item xs={4}><TextField label="date" type="date"></TextField></Grid>
        <Grid item xs={4}><TextField label="gender"><Typography>Female</Typography></TextField></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={3}></Grid>
      <Grid item xs={3}><Button variant='contained' color='success'>Submit</Button></Grid>
      <Grid item xs={3}><Button variant='contained' color='error'>Submit</Button></Grid>
      <Grid item xs={3}></Grid>
    
      </Grid>
    </div>
  )
}
