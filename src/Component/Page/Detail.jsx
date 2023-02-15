import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveIcon from "@mui/icons-material/Remove";
import { handleincrement } from "../Utility";

export const Detail = () => {
  const location = useLocation();
  const data = location.state;
  console.log(location);
  console.log(data);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6}>
          <img src={data.image} alt="" height={600} width={600} />
        </Grid>
        <Grid item xs={6}>
          <h1>
            Title : {data.title}
          </h1>
          <br></br>
          <h2>Description : {data.description}</h2>
          <br></br>
          <h4>Price : {data.price}</h4>
          <br></br>
          <h2>
            <span>
              <RemoveIcon className="add-icon" />
            </span>{" "}
            {data.userquantity}{" "}
            <span>
              <AddBoxIcon className="add-icon" />
            </span>
          </h2>{" "}
          <Button variant="outlined">Add to cart</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
