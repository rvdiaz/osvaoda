 export const makeArrayBoolean=(sizes)=>{
    let arrayChecked=[];
    sizes.forEach((element) => {
        arrayChecked.push({
            value:element,
            checked:false
        });
    });
    return arrayChecked;
}