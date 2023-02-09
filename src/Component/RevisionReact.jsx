import React from 'react'

export const RevisionReact = () => {
  return (
    <div>RevisionReact</div>
  )
}
// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// },1000)
// setTimeout(()=>{
//     console.log("3")
// },0)
// console.log("4")


console.log("1")
setTimeout(()=>{
    console.log("2")
},-1000)
setTimeout(()=>{
    console.log("3")
},0)
console.log("4")

console.log("1")
setTimeout(()=>{
    console.log("2")
},)
Promise.resolve().then(()=>{
    console.log("3")
})
console.log("4")
