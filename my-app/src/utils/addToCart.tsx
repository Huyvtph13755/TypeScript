var cart: any[] = []
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart') as string)
}

export const addToCart = (newProduct:any, next:any) => {
    const exitsProduct = cart.find(item => item._id === newProduct._id);
    if(!exitsProduct){
        cart.push(newProduct);
    } else {
        exitsProduct.quantity +=  +newProduct.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}