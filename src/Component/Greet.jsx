import React from 'react'

// export const Greet = ( props ) => {
// export const Greet = ({car1,car2,car3,car4}) => {         //2nd method
export const Greet = (props) => { 
  const {car1,car2,car3,car4}=props                 //3rd
  
  // console.log(props)   
  return (
    <div>
      {/* <h1>hello {props.name1} {props.name2} from {props.name3} {props.name4}welcome to career next</h1> */}
      {/* <h1>Car name:{props.car1}</h1>
      <h1>Car model:{props.car2} </h1>
      <h1>Car color:{props.car3}</h1>
      <h1>Car type:{props.car4} </h1> */}

      <h1>Car name:{car1}</h1>    2nd method
      <h1>Car model:{car2} </h1>
      <h1>Car color:{car3}</h1>
      <h1>Car type:{car4} </h1>

      <h1></h1>
    </div>
  )
}
