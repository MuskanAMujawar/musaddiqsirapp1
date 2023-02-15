import React,{useState} from 'react'


export const ToDoList2 = () =>{
const [todo,setTodo]=useState([])
const [text,setText]=useState('')
const [copytodo,setcopytodo]=useState([])

const handleadd=()=>{
    if (!text.trim())return
    setTodo([...todo,text])
    setText(' ')
    setcopytodo([...todo,text])
}
const handledelete=(item,index)=>{
    const deletion=todo.filter((elem,id)=>id!=index)
    setTodo(deletion)
}

const handlesearch = (value)=>{
    const searching=copytodo.filter((elem)=>elem.toUpperCase().includes(value.toUpperCase()))
    setcopytodo(searching)
    
}


    return(
        <div>
            <h1>list</h1>
            <input type="text" placeholder="searching" onChange={(e)=>handlesearch(e.target.value)}/>
            <input type="text" placeholder='adding' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>handleadd()}>add</button>
            {todo.map((item,index)=>{
                return(
                    <ol>
                        <li key={index}>{item}
                        <button onClick={()=>handledelete(item,index)}>delete</button>
                        </li>
                    </ol>
                )
            })}
        </div>
    )
}