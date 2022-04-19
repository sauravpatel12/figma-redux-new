
const initialstate={
    user:[
        {
            id:1,
            name:"dipesh"
        }
    ]
};
export const user=(state=initialstate,action) =>{
    switch(action.type){
        case "setuser":
            return state;
        default:
            return state;    
    }
}