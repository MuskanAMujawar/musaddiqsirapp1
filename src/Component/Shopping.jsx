import React,{useState} from 'react'
import { Box, Tabs, Tab} from '@mui/material'

export const Shopping =()=>{
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
         <Box sx={{ width: '100%' }}>
         <Tabs
           value={value}
           onChange={handleChange}
           textColor="secondary"
           indicatorColor="secondary"
           aria-label="secondary tabs example"
         >
           <Tab value="one" label="Item One" />
           <Tab value="two" label="Item Two" />
           <Tab value="three" label="Item Three" />
         </Tabs>

       </Box>
    )
}