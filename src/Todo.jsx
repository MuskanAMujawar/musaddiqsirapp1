// import { Button } from "@mui/material";
// import React, { useState } from "react";

// export const Todo = () => {
//   const [text, settext] = useState("");
//   const [data, setData] = useState([]);
//   const [copydata, setcopydata] = useState([]);

//   const handlesubmit = () => {
//     if (text.trim() !=""){
//       setData([...data,text]);
//       setcopydata([...data,text])
//     }
//     settext("")
//   };

//   const handlefilter = (value) => {
//     const searchdata = copydata.filter((item) =>
//       item.toUpperCase().includes(value.toUpperCase())
//     );
//     setData(searchdata);
//     console.log(searchdata);
//   };

//   const handledelete=(index)=>{
//     const deletedata=data.filter((elem,ind)=>ind !=index)
//     setData(deletedata)
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="search bar"
//         onChange={(e) => handlefilter(e.target.value)}
//       />
//       <input onChange={(a) => settext(a.target.value)} value={text} />
//       <Button onClick={handlesubmit}>Add</Button>
//     <ul>
//         {data.map((item,index) => {
//           return (
//             <div>
//               <li onClick={()=>handledelete(index)}>{item}</li>
//               <Button onClick={()=>settext(item)}>edit</Button>
//             </div>
//           )

//         })}
//       </ul>
//     </div>
//   );
// };

// import React, { useState } from "react";

// export const Todo = () => {
//   const [todo, setTodo] = useState([]); //main array collection of data
//   const [text, setText] = useState(""); //type jo kar rahe text
//   const [copytodo, setcopytodo] = useState([]); //search kere baad only search item dikhta wo avoid krne ke liye copy of main array bana diya
//   const [selectedindex, setselectedindex] = useState(null); //edit click kare baad input me jana
//   const [edit, setedit] = useState(false); //edit kiya hua ussi jage add

//   // console.log(text)

//   const handleaddtask = () => {
//     if (edit) {
//       const editedtask = todo.map((elem, index) =>
//         index == selectedindex ? text : elem
//       );
//       setTodo(editedtask);
//       setcopytodo(editedtask);
//       setText("");
//       setedit(false);
//     } else {
//       if (!text.trim()) return;

//       setTodo([...todo, text]);
//       setText("");
//       setcopytodo([...todo, text]);
//     }
//   };
//   const handleDeletetask = (item, id) => {
//     const remaintask = todo.filter((elem, ind) => ind !== id);
//     setTodo(remaintask);
//   };

//   const handlesearchtask = (value) => {
//     const searchitem = copytodo.filter((elem) =>
//       elem.toUpperCase().includes(value.toUpperCase())
//     );
//     console.log(searchitem);
//     setcopytodo(searchitem);
//   };
//   const handleEdittask = (item, ind) => {
//     // console.log("item==",item)
//     // console.log("ind==",ind)
//     setText(item);
//     setselectedindex(ind);
//     setedit(true);
//   };

//   return (
//     <div>
//       <h1> To Do list </h1>
//       <input
//         type="text"
//         placeholder="add to do"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="search here"
//         onChange={(e) => handlesearchtask(e.target.value)}
//       />
//       <button onClick={() => handleaddtask()}>
//         {edit ? "edit" : "Add"} Task
//       </button>
//       <ol>
//         {todo.map((item, index) => {
//           return (
//             <li key={index}>
//               {item}
//               <button onClick={() => handleEdittask(item, index)}>edit</button>
//               <button onClick={() => handleDeletetask(item, index)}>
//                 delete
//               </button>
//             </li>
//           );
//         })}
//       </ol>
//     </div>
//   );
// };


