import { useEffect, useState } from "react";
import { setLocalStorage, storedProducts } from "../../utilities/localStorage";

import CartPanel from "../CartPanel/CartPanel";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    },[])

    useEffect(()=>{
        const storedCart = storedProducts();
        const savedCart = [];
        for(const id in storedCart){
            const addedProducts = products.find(item => item.id === id);
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
            setCart(savedCart);
        }

    },[products])

    const handleATC = (product) => {
        let shoppingCart = [];
        const exist = cart.find(item => item.id === product.id);
        if(!exist){
            product.quantity = 1;
            shoppingCart = [...cart, product];
        }else{
            const rest = cart.filter(item => item.id !== product.id);
            product.quantity = product.quantity + 1;
            shoppingCart = [...rest, exist];
        }

        setCart(shoppingCart);
        setLocalStorage(product.id);
    }
    const handleClear = () => {
        const shoppingCart = [];
        setCart(shoppingCart);
    }
    
    return (
        <div className="grid md:grid-cols-5">
            <div className='col-span-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-11 mx-auto pt-28 '>
                {
                    products?.map(product => <Product key={product.id} product={product} handleATC={handleATC}></Product>)
                }
            </div>
            <div className='hidden md:block md:col-span-1'>
                <CartPanel cart={cart} handleClear={handleClear}></CartPanel>
            </div>
        </div>
    );
};

export default Shop;