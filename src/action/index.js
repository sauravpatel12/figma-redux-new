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


export default setuser;
export {createpost};