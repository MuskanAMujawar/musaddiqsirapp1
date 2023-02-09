import React from "react"
import { Button,TextField } from "@mui/material"

function form(){
    return(
        <div className="form">
            <h1>Registration form</h1>
            <form action="">
            {/* <label htmlFor="">first name :</label> */}
            <TextField id="outlined-basic" label="first name" variant="outlined" />
            {/* <input type="text" /><br /><br /> */}
            <label htmlFor=""> name :</label>
            <input type="text" name="" id="" /><br /><br />
            <label htmlFor=""> name :</label>
            <input type="text" name="" id="" /><br /><br />
            <label htmlFor="">date of birth :</label>
            <input type="date" name="" id="" /><br /><br />
            <label htmlFor="">state :</label>
            <input type="text" name="" id="" /><br /><br />
            <label htmlFor="">district :</label>
            <input type="text" name="" id="" /><br /><br />
            <TextField type="number" id="outlined-basic" label="mobile no" variant="outlined" />
            {/* <label htmlFor="">mobile no :</label> */}
            {/* <input type="number" name="" id="" /><br /><br /> */}
            <label htmlFor="">email:</label>
            <input type="email" name="" id="" /><br /><br />
            <label htmlFor="">password :</label>
            <input type="password" name="" id=""/><br /><br />
            <label htmlFor="">pincode :</label>
            <input type="number" name="" id="" /><br /><br />
            <label htmlFor="">upload photo :</label>
            <input type="file" /><br /><br />
            <Button variant="outlined" color="success" >submit</Button>
            {/* <button>submit</button> */}
            </form>
        </div>
    )
}


export default form