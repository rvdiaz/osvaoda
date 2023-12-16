import axios from "axios";

export const sendOrder=async(inputForm)=>{
    try {
    const name=inputForm.name.value;
    const phone=inputForm.phone.value;
    const email=inputForm.email.value;
    const message=inputForm.message.value;
    let res;
    await axios.post(
        process.env.REACT_APP_API_USEQUERY+'/api/leads',
        {
        "data":{
            "name": name,
            "email":email,
            "phone":phone, 
            "message":message
        }
        },
        {
            headers: {
                Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`
            }
        }
   )
    .then((response)=>{
        res=response;
    })
    .catch(({response})=>{
       res=response;
    })
    return res;

} catch (error) {
    return error;
}
}