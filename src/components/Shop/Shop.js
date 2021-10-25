import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const [cart, steCart] = useState([]);
    const handelAddProduct = (product) =>{
        const newCart = [...cart, product];
        steCart(newCart);
    }
    return (
        <div className ='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product key = {pd.key} product = {pd} handelAddProduct = {handelAddProduct} ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;