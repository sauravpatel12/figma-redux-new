
const initialstate=[
    
    {
        email:1,
        password:"dipeshgdg"
    }

]
export  const curruser=(state=initialstate,action) =>{
switch(action.type){
    case "setcurruser":
        
        console.log(action.payload)
        return [...state,action.payload];
    default:
        return state;    
}
}