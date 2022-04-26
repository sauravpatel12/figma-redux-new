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
const setstate=(index)=>{
    console.log("visited action",index);
    return{
        type:'setstate',
        payload:index,
    }
}
const update=(data)=>{
    return{
        type:'update',
        payload:data,
    }
}


export default setuser;
export {createpost,setcurruser,setstate,update};