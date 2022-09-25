import { useEffect, useState } from "react";
import CartPanel from "../CartPanel/CartPanel";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    },[])
    return (
        <div className="grid grid-cols-4">
            <div className='col-span-3 grid grid-cols-3 gap-11 mx-auto py-10'>
                {
                    products?.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='col-span-1'>
                <CartPanel></CartPanel>
            </div>
        </div>
    );
};

export default Shop;