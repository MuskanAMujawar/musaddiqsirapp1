import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Data } from "./Data";

export const Datamap = () => {
  return (
    <div>
      <h1>shopping webpage</h1>
      <Grid container spacing={4}>
        {Data.map((item) => {
          return (
            <Grid item xs={4}>
              <Card>
                <h1>{item.title}</h1>
                <CardContent>
                  <img src={item.image} height={500} width={500} />
                     <Grid item xs={12}>
                    <Button variant="contained" color="success">
                      Buy Now
                    </Button>
                    <Button variant="contained" color="success">
                      Add to cart
                    </Button>
                    <h3>Rating*:{item.rating.rate}</h3>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
