import { Card, CardContent, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import {Data} from './Data'

export const Cardmaterial = () => {

//     const arr=[{image_name:"./jackets1.webp"},
//                {image_name:"./jackets2.webp"},
//                {image_name:"./jackets3.webp"},
//                {image_name:"./jeans2.webp"},
//                {image_name:"./jeans11.webp"},
//                {image_name:"./jeans12.webp"},
//                {image_name:"./kurtis10.webp"},
//                {image_name:"./kurti11.webp"},
//                {image_name:"./kurti12.webp"},
//                {image_name:"./lehenga1.webp"},
//                {image_name:"./lehenga2.webp"},
//                {image_name:"./lehenga3.webp"},
//                {image_name:"./saree1.webp"},
//                {image_name:"./saree2.webp"},
//                {image_name:"./saree3.webp"},
//                {image_name:"./tshirt1.webp"},
//                {image_name:"./tshirt2.webp"},
//                {image_name:"./tshirt3.webp"},
// ]

// const arr1=new Array(6)
// arr1.fill(0)
console.log(Data)

return (
    <div>
            <Grid container spacings={3}>
                {Data.map((item,index)=>{
                    return(
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    {/* <img src={`./a${index}.webp`} height={300} width={300}/> */}
                                    <img src={item.image} height={300} width={300}/>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
















        {/* <Grid container spacing={3}>
            {arr.map((elem)=>{
                return(
                    <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <img src={elem.image_name} alt='' height={300} width={300}/>
                        </CardContent>
                    </Card>
                </Grid>
                )
            })} */}
            {/* <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <img src='./item.image_name'/>
                    </CardContent>
                </Card>
            </Grid> */}
        {/* </Grid> */}















        {/* <Grid container spacing={3}>
            <Grid item xs={4}>
            <Card>
                <CardContent style={{backgroundColor:"grey"}}>
                    <img src='./kurti2.webp' alt='' width={300} height={400}/>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor: "grey"}}>
                         <img src='./kurti2.webp' alt='' width={300} height={400}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"grey"}}>
                        <img src='./kurti2.webp' alt='' width={300} height={400}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"grey"}}>
                        <img src="./jeans11.webp" alt=''width={400} height={500}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:'grey'}}>
                        <img src='./jeans12.webp' alt='' width={400} height={500}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"grey"}}>
                        <img src='./jeans2.webp' alt='' width={400} height={500}/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"grey"}}>
                        <img src='./saree1.webp'/>
                    </CardContent>
                </Card>
            </Grid>

        </Grid> */}
    </div>
   )
}
