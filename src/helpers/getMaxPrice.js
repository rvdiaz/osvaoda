export const getMaxPrice=(products)=>{
    let max=2;
    products.forEach(element => {
        if(element.attributes.price>max)
            max=element.attributes.price;
    });
    return max;
}