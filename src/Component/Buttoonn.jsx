import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

export const Buttoonn = () => {
  const [data, setData] = useState(0);

  const handleadd = () => {
    data>=10 ? setData(data*2) : setData(data+1)
  };

  const handlesubmit = () => {
    // if (data === 0) {
    //   return 0;
    // } else {
    //   setData(data - 1);
    // }

    data>0 && setData (data-1)
  };

  const handlereset = () => {
    setData(0);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <h1>{data}</h1>
          <Button variant="outlined" onClick={() => handleadd(+1)}>
            increment
          </Button>
          <Button variant="outlined" onClick={() => handlesubmit(-1)}>
            decrement
          </Button>
          <div className="zero">
            <Button
              variant="outlined"
              onClick={() => handlereset(0)}
              color="success"
            >
              reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};


// {/* <h1></h1>className{data>0 ?"positive" : "negative"} */} zero color

// {/* <h1 style={count >0 ?red:green}> </h1> */}   in this tag use <button></button>