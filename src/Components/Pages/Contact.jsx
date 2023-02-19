import React, { useEffect,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CardContent, Grid ,Card, Button, Pagination} from "@mui/material";

export const Contact = () => {
  const select=useSelector((state)=>state)
  const dispatch=useDispatch()
  const carData=select.CarReducer.carData
  const [data,setdata]=useState([])
  const [page,setPage]=useState(8)



  const getCardata =async ()=>{
    const res=await axios.get("https://myfakeapi.com/api/cars/")
    dispatch({
      type : "ADD_CAR_DATA",
      payload : res.data.cars
    })
    
  }
console.log("cardata",carData)
useEffect(()=>{
  setdata(carData)
},[carData])

  useEffect(()=>{
getCardata()
  },[])
  return (
    <div>
      <h1>Contact</h1>
      <Grid container spacing={4}>
        {data.slice(page-8,page).map((item)=>{
          return(
          <Grid item xs={3}>
          <Card>
            <CardContent sx={{backgroundColor: `${item.car_color}`}}>
              <h2>car name : {item.car}</h2>
              <h2>car price : {item.price}</h2>
              <Button disabled={!item.availability} variant="contained" color="success" >Buy now</Button>
            </CardContent>
          </Card>
          </Grid>
          )
        })}
        <Pagination count={Math.round(data?.length/8)} color="secondary" onChange={(e,value)=>setPage(value*8)} />
      </Grid>

    </div>
  );
};
