
const initialstate=[
    
        {
            email:1,
            password:"dipesh",
            firstname:"sdf",
            lastname:"fsff",
            phone:"435353535",
            url:"hgfh/fhhf/hgfh",
        }
    
]
export const user=(state=initialstate,action) =>{
    switch(action.type){
        case "setuser":
            
        console.log("hello")
            console.log(action.payload)
            return [...state,action.payload];
        default:
            return state;    
    }
}