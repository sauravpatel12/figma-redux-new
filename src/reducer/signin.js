

const initalstate={};

const Signin =(state=initalstate,action)=>{
   switch(action.type){
        case "Signin":
            return {name:action.playload}
        default:
            return state;
}
}
export default Signin;