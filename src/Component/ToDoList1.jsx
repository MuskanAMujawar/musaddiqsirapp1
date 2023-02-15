import React,{useState} from 'react'


export const ToDoList1=()=>{
const [todo,settodo]=useState([])
const [text,settext]=useState('')
const [copytodo,setcopytodo]=useState([])

const handleadd=()=>{
    if(!text.trim())return
    settodo([...todo,text])
    settext(' ')
    setcopytodo([...todo,text])
}

const handledelete=(item,index)=>{
    const deletion=todo.filter((elem,id)=>id!=index)
    settodo(deletion)
}

const handlesearch = (value)=>{
    const searching=copytodo.filter((elem)=>elem.toUpperCase().includes(value.toUpperCase()))
    settodo(searching)
    // console.log(searching)
}
    return(
        <div>
            <h1>list</h1>
            <input type='text' placeholder='adding' value={text} onChange={(e)=>settext(e.target.value)}/>
            <input type='text' placeholder="search here" onChange={(e)=>handlesearch(e.target.value)}/>
            <button onClick={()=>handleadd()}>add</button>
            {todo.map((item,index)=>{
                return(
                    <ol>
                        <li>
                            {item}
                        </li>
                        <button onClick={()=>handledelete(item,index)}>delete</button>
                    </ol>
                )
            })}
        </div>
    )
}