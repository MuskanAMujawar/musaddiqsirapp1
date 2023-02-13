import { Card, CardContent, Grid } from '@mui/material'
import axios from 'axios'
import React, {useState} from 'react'


export const Asyncawait =()=>{
    const [data,setdata]=useState([])

    const gethere=async ()=>{
        const he=await axios.get("https://api.escuelajs.co/api/v1/products")
        console.log(he)
        setdata(he.data)
    }
    return(
        <div>
            <h1 style={{color:"orange"}}>SHOPPING HERE</h1>
            <button onClick={gethere}>get here</button>
            {data.map((item)=>{
                return(
                   <div>
                    <Grid conatiner spacing={4} >
                    <Grid item xs={6}>
                    <Card>
                        <h1 style={{color:"red"} }>{item.title}</h1>
                        <CardContent style={{backgroundColor:"grey"}} height={700} width={700}>
                        <img src={item.images} height={500} width={500}/>
                        </CardContent>
                        <h4>price:{item.price}</h4>
                    </Card>
                    </Grid>
                    </Grid>
                    </div> 
                )
            })}
        </div>
    )
}