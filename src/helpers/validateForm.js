export const validateForm=(inputForm,setinputForm)=>{
    let name={};
    let address={};
    let phone=inputForm.phone;
    let email=inputForm.email;
    let valid=true;
    switch (true) {
        case inputForm.name?.value === '':
            name={
                ...inputForm.name,
                error:true,
                errorMessage:'This field is required'
            }
            valid=false;
            break;
        default:
            name=inputForm.name;
            break;
    }

    switch (true) {
        case inputForm.address?.value === '':
            address={
                ...inputForm.address,
                error:true,
                errorMessage:'This field is required'
            }
            valid=false;
            break;
        default:
            address=inputForm.address;
            break;
    }

    switch (true) {
        case inputForm.phone?.value === '':
            phone={
                ...inputForm.phone,
                error:true,
                errorMessage:'This field is required'
            }
            valid=false;
            break;
        default:
            phone=inputForm.phone;
            break;
    }
    
    switch (true) {
        case inputForm.email?.value === '':
            email={
                ...inputForm.email,
                error:true,
                errorMessage:'This field is required'
            }
            valid=false;
            break;
        case inputForm.email?.value === '' && validateEmail(inputForm.email?.value):
            email={
                ...inputForm.email,
                error:true,
                errorMessage:'Email format is incorrect'
            }
            valid=false;
            break;
        default:
            email=inputForm?.email;
            break;
    }

    setinputForm((current)=>{
        return{
            ...current,
            address:address,
            name:name,
            phone:phone,
            email:email
            }}
        )  
    return valid;
}

const validatePhone=(phone)=>{
    const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return !phone?.match(phoneno);
}

const validateEmail=(email)=>{
    const emailCheck=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !email?.match(emailCheck);
}
