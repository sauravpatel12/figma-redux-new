
const initialstate=[
    
        {
            email:1,
            password:"dipesh"
        }
    
]
export const user=(state=initialstate,action) =>{
    switch(action.type){
        case "setuser":
            console.log("user vi")
            return [...state,action.payload];
        default:
            return state;    
    }
}