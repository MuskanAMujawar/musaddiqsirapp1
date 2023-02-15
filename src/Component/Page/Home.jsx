import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { addquantity, handledecrement, handleincrement } from "../Utility";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveIcon from "@mui/icons-material/Remove";

export const Home = () => {
  const [data, setData] = useState([]);
  const [addtocart, setaddtocart] = useState([]);
  const [copydata, setcopydata] = useState([]);
  const [category, setcategory] = useState([]);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();

  //   //const getData = async ()=>{
  //   //   const res=await axios.get("https://jsonplaceholder.typicode.com/photos")
  //   //   console.log(res.data)
  //   //   setData(res.data)
  //   // }
  //   // getData()

  async function adddata() {
    const getData = await axios.get("https://fakestoreapi.com/products");
    setData(addquantity(getData.data));
    setcopydata(addquantity(getData.data));
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    // console.log(getData.data);
    console.log(response.data);
    setcategory([...response.data, "all"]);
  }
  const handleaddtocart = (item) => {
    const duplicate = addtocart.some((elem) => elem.id == item.id);
    if (!duplicate) {
      setaddtocart([...addtocart, item]);
    }
  };
  // console.log("coo", copydata)
  // console.log("get", getdata)

  // const handledetail=(userdetail)=>{
  //   const detailss=copydata.filter((elem,index)=>elem==userdetail)
  //   setData(detailss)
  // }

  // const handlesearch=(value)=>{
  //   // console.log(value)
  //   const searching=copydata.filter((item)=>item.title.toUpperCase().includes(value.toUpperCase()))
  //   setData(searching)
  // }
  const handlecategory = (usercategory) => {
    if ("all" == usercategory) {
      setData(copydata);
    } else {
      const cater = copydata.filter((item) =>
        item.category.includes(usercategory)
      );
      setData(cater);
    }
  };

  const handlenavigate = (item) => {
    navigate("/Detail", { state:  item 
     });
    // console.log(item)
  };

  const handleincrementqty = (id) => {
    const res = handleincrement(copydata, id);
    setData(res);
    setcopydata(res);
  };

  const handledecrementqty = (id) => {
    const res = handledecrement(copydata,id);
    setData(res);
    setcopydata(res);
  };

  const res = handleincrement(data, 3);
  console.log(res);

  const ress = handledecrement(data, 2);
  console.log(ress);

  useEffect(() => {
    adddata();
  }, []);

  useEffect(() => {
    const searchdata = copydata.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase())
    );
    setData(searchdata);
    console.log(search);
  }, [search]);

  return (
    <div>
      {/* <h1>Home</h1> */}

      {/* <button onClick={getData}>getdata</button> */}
      <Grid container spacing={4} style={{ marginTop: 1 }}>
        {category.map((item) => {
          return (
            <Grid item xs={item == "all" ? 1 : 2} className="Button-container">
              <Button variant="contained" onClick={() => handlecategory(item)}>
                {item}
              </Button>
            </Grid>
          );
        })}
        {/* <Grid item xs={1} className="Button-container">
          <Button variant="contained" onClick={()=>handlecategory("women's clothing")}>womens</Button>
        </Grid>
        <Grid item xs={2} className="Button-container">
          <Button variant="contained" onClick={()=>handlecategory("jewelery")}>jewellery</Button>
        </Grid>
        <Grid item xs={1} className="Button-container">
          <Button variant="contained" onClick={()=>handlecategory("electronics")}>electric</Button>
        </Grid>
        <Grid item xs={3} className="Button-container">
          <Button variant="contained" onClick={()=>handlecategory("all")}>all</Button>
        </Grid> */}
        <Grid item xs={2} className="Button-container">
          <TextField
            label="search"
            onChange={(e) => setsearch(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={1}>
          <Badge badgeContent={addtocart.length} color="secondary" ero>
            <ShoppingCartIcon
              style={{ color: "#1976d2", fonSize: 40, cursor: "pointer" }}
            />
          </Badge>
        </Grid>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} key={index} md={3}>
              <Card sx={{ height: 350 }}>
                <CardContent>
                  <img
                    src={item.image}
                    width={200}
                    height={200}
                    style={{ position: "relative", left: 40 }}
                  />
                  <h3>
                    Title: {item.title.substring(0, 20)}
                    {item.title.length > 20 && "..."}
                  </h3>
                  <h4>price:$ {item.price}</h4>
                  {/* <h4>category:{item.category}</h4> */}
                  <h2>
                    <span>
                      <RemoveIcon
                        className="add-icon"
                        onClick={() =>item.userquantity>0 && handledecrementqty(item.id)}
                      />
                    </span>{" "}
                    {item.userquantity}{" "}
                    <span>
                      <AddBoxIcon
                        className="add-icon"
                        onClick={() => handleincrementqty(item.id)}
                      />
                    </span>
                  </h2>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handlenavigate(item)}
                  >
                    Detail
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ position: "relative", left: 60 }}
                    onClick={() => handleaddtocart(item)}
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

// import {Grid,Card, CardContent } from '@mui/material'
// import axios from 'axios'
// import React, { useEffect,useState } from 'react'

// export const Home = () =>{
//   const [data,setdata]=useState([])

//   async function addData(){
//     const shop=await axios.get("https://api.escuelajs.co/api/v1/products")
//     setdata(shop)
//   }

//   useEffect(()=>{
//     addData()
//   },[])
//   return(
//     <div>
//       <h1>shopping here</h1>
//       {data.map((item)=>{
//         return(
//         <div>
//           <Grid container spacing={4}>
//             <Grid item xs={4}>
//                <Card>
//                 <CardContent>
//                   <img src={item.images}/>
//                 </CardContent>
//                </Card>
//             </Grid>
//           </Grid>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
