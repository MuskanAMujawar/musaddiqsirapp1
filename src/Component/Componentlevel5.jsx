import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Componentlevel5 = () => {
  const [name, setName] = useState();
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const obj = {
      fname: name,
    };
    setData([...data, obj]);
    console.log(obj);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <TextField
            label="name"
            onChange={(a) => setName(a.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={4}>
          <Button
            variant="filled"
            color="success"
            onClick={handleSubmit}
          >sure</Button>
        </Grid>
      </Grid>
      <h1>name:{name}</h1>
    </div>
  );
};
