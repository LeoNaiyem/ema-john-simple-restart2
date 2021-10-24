import React, { useEffect, useState } from 'react';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    console.log(products)
    return (
        <div>
            <h1>This is shop: </h1>
            {
                <h2>Product Number: {products.length}</h2>
                
            }
        </div>
    );
};

export default Shop;