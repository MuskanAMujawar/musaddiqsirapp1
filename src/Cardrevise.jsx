import { Button, Card, CardContent, Grid } from '@mui/material'
import { border } from '@mui/system'
import React from 'react'
import {Data} from './Data'

export const Cardrevise = () => {

//     {image_url:"./headphone.jpg"},
//     {image_url:"./headphone.jpg"},
//     {image_url:"./headphone.jpg"}
// ]

// const arr=new Array
// arr.fill(0)
console.log(Data)
  return (
       <div>
            <Grid container spacings={2}  style={{Color:"grey"}} >
              {Data.map((item)=>{
                return(
                  <Grid item xs={3}>
                    <Card >
                    <h3>{item.title}</h3>
                      <CardContent>
                        <img src={item.image} alt='' height={300} width={300}/>
                      </CardContent>
                      <h1><Button variant='contained' color='success'>{item.price}</Button></h1>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>











      {/* <Grid container spacing={3}>
          {arr.map((item)=>{
            return(
              <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <img src={item.image_url}/>
                    </CardContent>
                  </Card>
              </Grid>
            )
          })}
      </Grid>
 */}


      {/* <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img src="./headphone.jpg" alt="" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img src='./headphone.jpg' alt=''/>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </div>
  )
}
