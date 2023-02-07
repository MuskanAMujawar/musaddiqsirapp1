import { Grid, TextField } from '@mui/material'
import React,{useState} from 'react'

export const Componentlevel = () => {
    const [firstname,setFirstname]=useState()
    // // console.log(firstname)
    const [middlename,setmiddlename]=useState()
    // // console.log(middlename)
     const [lastname,setlastname]=useState()    
     const [address,setaddress]=useState()
     const [email,setemail]=useState()
    const [mobile,setmobile]=useState()
     const [pincode,setpincode]=useState()
     const [city,setcity]=useState()
     const [state,setstate]=useState()
    // // console.log(lastname)
  return (
    <div>
        <label> first name </label>
        <input type="text" onChange={(e)=>setFirstname(e.target.value)}/>
        <label> middle name </label>
        <input type="text" onChange={(e)=>setmiddlename(e.target.value)}/>
        <label> last name </label>
        <input type="text" onChange={(e)=>setlastname(e.target.value)}/>
        <label> address</label>
        <input type="text" onChange={(e)=>setaddress(e.target.value)}/>
        <label> email id </label>
        <input type="email" onChange={(e)=>setemail(e.target.value)}/>
        <label> mobile number</label>
        <input type="number" onChange={(e)=>setmobile(e.target.value)}/>
        <label> pincode </label>
        <input type="number" onChange={(e)=>setpincode(e.target.value)}/>
        <label> city </label>
        <input type="text" onChange={(e)=>setcity(e.target.value)}/>
        <label> state </label>
        <input type="text" onChange={(e)=>setstate(e.target.value)}/>
        <h1>Name :{firstname}</h1>
        <h1>middleName :{middlename}</h1>
        <h1>lastName :{lastname}</h1>
        <h1>address :{address}</h1>
        <h1>email :{email}</h1>
        <h1>mobile :{mobile}</h1>
        <h1>pincode :{pincode}</h1>
        <h1>city:{city}</h1>
        <h1>state :{state}</h1>
    </div>
  )
}


