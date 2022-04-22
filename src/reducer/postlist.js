
const initialstate=[
    
    

]
export const postlist=(state=initialstate,action) =>{
switch(action.type){
    case "createpost":
        console.log("user vigfhfhfhfhfhf")
        return [...state,action.payload];
    default:
        return state;    
}
}