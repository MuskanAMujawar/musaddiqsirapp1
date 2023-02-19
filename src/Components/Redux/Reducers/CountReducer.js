const initialstate= {
    count : 0
}


export const CountReducer = (state=initialstate,action)=>{
    switch (action.type) {
        case "COUNT_INCREMENT":
            return {
                ...state,
                count: state.count+action.payload
            }
            break;
        case "COUNT_DECREMENT":
            return {
                ...state,
                count: state.count>0 ? state.count-action.payload :0
            }
            break;
    
    
    }
    return state
}