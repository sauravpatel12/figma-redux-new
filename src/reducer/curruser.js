
const initialstate=[]
export  const curruser=(state=initialstate,action) =>{
switch(action.type){
    case "setcurruser":
        
       console.log(action.payload)
        return [action.payload];
    case "remove":
        console.log("remove");
        return [];    
    default:
        return state;    
}
}