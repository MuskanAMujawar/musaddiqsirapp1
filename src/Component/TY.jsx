import React from 'react'
import { Grid,TextField,Button } from '@mui/material'

const TY =()=>{
    return(
        <div><h1>hello Third</h1>
             <Grid item xs={4}>
                <TextField label='last name'></TextField>
                <Button variant='contained' colour='success'>reset</Button>
            </Grid>
        </div>
    )
}
export default TY