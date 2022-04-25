 const setuser =(newuser)=>{
    return{
        type:'setuser',
        payload:newuser,
    };
};
const createpost = (createpost)=>{
    return{

        type:"createpost",
        payload:createpost,
    }
}

const setcurruser=(newcurruser)=>{
    return{
        type:'setcurruser',
        payload:newcurruser,
    }
}


export default setuser;
export {createpost,setcurruser};