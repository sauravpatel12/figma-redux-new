
const initialstate=[
    
        {
            email:"patelsaurav1333@gmail.com",
            password:"12345678",
            firstname:"saurav",
            lastname:"patel",
            phone:"7201989575",
            url:"blob:http://localhost:3000/4ae68ec3-7a17-4afe-bd15-75e997219c08",
            dob:"2022-04-22",
            gender:"male"

        }
    
]
export const user=(state=initialstate,action) =>{
    switch(action.type){
        case "setuser":
            return [...state,action.payload];
         case "update":
             return action.payload;   
            //  console.log("upadate reducer",action.payload);
        default:
            return state;    
    }
}