import React from 'react'

export const Subabout = (props) => {
    const {text,handlechange} =props
  return (
    <div>
        <h1>child</h1>
        <input value={text} onChange= {(e)=>handlechange(e.target.value)} style={{width:"500px" , padding:"20px"}}/>
    </div>
  )
}
