import React,{useState} from 'react'
import axios from 'axios'

export const Home = () => {
  const [data,setData]=useState([])

    const getData = async ()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/photos")
    console.log(res.data)
    setData(res.data)
  }
  getData()
  return (
    <div>
        <h1>Home</h1>

       <button onClick={getData}>getdata</button>

        {data.map((item)=>{
          return(
            <div>
              <img src={item.url} width={200} height={200}/>
            </div>
          )
        })}
    </div>
  )
}
