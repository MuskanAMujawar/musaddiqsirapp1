import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import SY from './SY'

const FY =()=>{
    return(
        <div>
            <h1>hello first</h1>
            <Grid item xs={4}>
                <TextField label='first name'></TextField>
                <Button variant='contained' colour='success'>reset</Button>
            </Grid>
            <SY/>
        </div>
    )
}
export default FY