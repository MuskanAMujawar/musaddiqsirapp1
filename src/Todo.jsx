import { Button } from "@mui/material";
import React, { useState } from "react";

export const Todo = () => {
  const [text, settext] = useState("");
  const [data, setData] = useState([]);
  const [copydata, setcopydata] = useState([]);

  const handlesubmit = () => {
    if (text.trim() !=""){
      setData([...data,text]);
      setcopydata([...data,text])
    }
    settext("")
  };

  const handlefilter = (value) => {
    const searchdata = copydata.filter((item) =>
      item.toUpperCase().includes(value.toUpperCase())
    );
    setData(searchdata);
    console.log(searchdata);
  };

  const handledelete=(index)=>{
    const deletedata=data.filter((elem,ind)=>ind !=index)
    setData(deletedata)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="search bar"
        onChange={(e) => handlefilter(e.target.value)}
      />
      <input onChange={(a) => settext(a.target.value)} value={text} />
      <Button onClick={handlesubmit}>Add</Button>
    <ul>
        {data.map((item,index) => {
          return (
            <div>
              <li onClick={()=>handledelete(index)}>{item}</li>
              <Button onClick={()=>settext(item)}>edit</Button>
            </div>
          )
          
        })}
      </ul>
    </div>
  );
};
