import { useEffect, useState } from "react";
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

    const handleATC = (product) => {
        const shoppingCart = [...cart, product];
        setCart(shoppingCart);
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