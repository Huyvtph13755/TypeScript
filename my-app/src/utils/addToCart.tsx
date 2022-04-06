var cart: any[] = []
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart') as string)
}

export const addToCart = (newProduct, next) => {
    const exitsProduct = cart.find(item => item._id === newProduct._id);
    if(!exitsProduct){
        cart.push(newProduct);
    } else {
        exitsProduct.quantity +=  +newProduct.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}

export const increaseQuantity = (_id) => {
    cart.find(item => item._id === +_id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
}
export const decreaseQuantity = (_id, next) => {
    const currentProduct = cart.find(item=> item._id === +_id);
    currentProduct.quantity--;
    if(currentProduct.quantity < 1){
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
        if(confirm){
            cart = cart.filter(item => item._id !== +_id);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}
export const removeItemInCart = (_id, next) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
    if(confirm){
        cart = cart.filter(item => item._id !== +_id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}