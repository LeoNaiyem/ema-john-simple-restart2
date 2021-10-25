import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    const fixCalculation = num =>{
        const result = num.toFixed(2);
        return Number(result)
    }

    //calculating product price
    let  productPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        productPrice = productPrice + product.price;
    }

    const vat = productPrice / 10;
    const total = productPrice + vat;

    //shipping price
    let shipping = 0;
    if (total > 0) {
        shipping = 12.6;
    }
    else if (total > 15) {
        shipping = 4.44;
    }
    else if (total > 35) {
        shipping = 0;
    }
    const grandTotal = total + shipping;
    return (
        <div className = 'cart-details'>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p><small>Product Price: ${fixCalculation(productPrice)}</small></p>
            <p><small>Shipping Cost: ${fixCalculation(shipping)}</small></p>
            <p><small>Tex + VAT: ${fixCalculation(vat)}</small></p>
            <h3>Total Price: ${fixCalculation(grandTotal)} </h3>
        </div>
    );
};

export default Cart;