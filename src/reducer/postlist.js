
const initialstate=[

    
    

]
export const postlist=(state=initialstate,action) =>{
switch(action.type){
    case "createpost":
        
        return [...state,action.payload];
    default:
        return state;    
}
}