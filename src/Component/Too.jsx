import React,{useState} from 'react'
import { Button } from '@mui/material';


export const Too=()=>{
    const [data, setdata] = useState("");
    const [text, settext] = useState([]);
    const [copydata, setcopydata] = useState([]);
  
    const handleadd = () => {
      setdata([...text, data]);
      setcopydata([...text, data]);
    };
  
    const handlefilter = (value) => {
      const searchdata = copydata.filter((item) =>
        item.toUpperCase().includes(value.toUpperCase())
      );
      settext(searchdata);
      console.log(searchdata);
    };

    const handledelete=()=>{

    }
    return (
        <div>
             <input
        type="text"
        placeholder="search"
        onChange={(a) => handlefilter(a.target.value)}
      />
      <input onChange={(a) => setdata(a.target.value)} value={data} />
      <Button variant="outlined" onClick={handleadd}>Add</Button>

      <ul>
        {data.map((item,index) => {
          return
          <div>
            <li onClick={()=>handledelete(index)}>{item}</li>
            <Button></Button>
          </div>
        })}
      </ul>
        </div>
    )
}