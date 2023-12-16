export const getTotalProducts=(products)=>{
    let quantity=0;
    let price=0;
    products.forEach((prod)=>{
        quantity+=prod.quantity;
        price+=(prod.price*prod.quantity);
    })
    return {
        totalPrice:price.toFixed(2),
        totalProducts:quantity
    };
}