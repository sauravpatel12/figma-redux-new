
const initialstate=[]
export  const arrayindex=(state=initialstate,action) =>{
switch(action.type){
    case "setstate":
        
       console.log(action.payload)
        return [action.payload];
    default:
        return state;    
}
}