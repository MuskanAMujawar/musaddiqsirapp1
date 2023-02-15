export const addquantity = (arr) =>{
    const res=arr.map((item)=>{
        return {...item,quantity : 8, userquantity: 0}
    })
    return res
}

export const handleincrement = (arr,id)=>{
const res=arr.map((item)=>{
    if (item.id==id){
        return{...item,userquantity: item.userquantity+1}
    } else {
        return item
    }

})
return res
}

export const handledecrement = (arr,id)=>{
    const res=arr.map((item)=>{
        
        if (item.id==id){
        return{...item,userquantity: item.userquantity-1}
        }else{
            return item
        }
    })
    return res
}