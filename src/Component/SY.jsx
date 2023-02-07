import React from 'react'
import TY from './TY'
import { Grid,TextField,Button } from '@mui/material'

export const SY = () => {
  return (
    <div><h1>hello second</h1>
     <Grid item xs={4}>
                <TextField label='middle name'></TextField>
                <Button variant='contained' colour='success'>reset</Button>
            </Grid>
    <TY/>
    </div>
  )
}
export default SY