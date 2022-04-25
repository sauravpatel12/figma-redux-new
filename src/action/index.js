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

const setcurruser=(curruser)=>{
    console.log(curruser);
    return{
        type:'setcurruser',
        payload:curruser,
    }
}


export default setuser;
export {createpost,setcurruser};