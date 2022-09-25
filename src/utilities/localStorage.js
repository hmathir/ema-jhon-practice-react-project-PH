const setLocalStorage = (id) => {

    let shoppingCart = {};

    //We are checking that alreay data stored or not on our Local Storage.
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    //Now We update our previous value if exist otherwise we add new value.
    const cartQuantity = shoppingCart[id];
    if(cartQuantity){
        const newQuantity = cartQuantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


const storedProducts = () => {
    let shoppingCart = {};

    //We are checking that alreay data stored or not on our Local Storage.
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
export {
    setLocalStorage,
    storedProducts
};
