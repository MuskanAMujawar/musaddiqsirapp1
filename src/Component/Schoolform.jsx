import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Schoolform = () => {
  const [name, setname] = useState();
  const [mob, setMob] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  // console.log(name)
  // console.log(mob)
  // console.log(email)
  // console.log(password)
  const handleSubmit = () => {
    const obj = {
      firstname: name,
      mobilenumber: mob,

      emailid: email,
      password: password,
    };
    setData([...data, obj]);
    console.log(data);
  };

  const handleDelete =(index)=>{
    //  const deleteData=data.filter((item)=>item.firstname !=name)
      const deleteData=data.filter((item,ind)=>ind !=index)
     setData(deleteData)
  }
  return (
    <div>
      <h1>School Registration form</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <TextField
            label="name"
            onChange={(a) => setname(a.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Mobile number"
            type="number"
            onChange={(a) => setMob(a.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="email"
            type="email"
            onChange={(a) => setEmail(a.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="password"
            type="password"
            onChange={(a) => setPassword(a.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" color="success">
            Reset
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        {data.map((item,index) => {
          return (
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <ul type="circle">
                 <li> <h1>name:{item.firstname}</h1></li>
                  <li><h1>mobile number:{item.mobilenumber}</h1></li>
                  <li><h1>Email:{item.emailid}</h1></li>
                <li><h1>Password:{item.password}</h1></li>
                  </ul>
                  {/* <Button variant="contained" color="error" onClick={()=>handleDelete(item.firstname)}>Delete</Button> */}
                  <Button variant="contained" color="error" onClick={()=>handleDelete(index)}>Delete</Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <h1>name:{name}</h1>
      <h1>mobile number:{mob}</h1>
      <h1>Email:{email}</h1>
      <h1>Password:{password}</h1>
    </div>
  );
};
