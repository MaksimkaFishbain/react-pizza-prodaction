import React from 'react';

const CartItem = ({ prop, cartItems, setCartItems, amount, setAmount }) => {

    const deleteItem = () => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== prop.id))
    }

    const accumulateAmount = (value) => {
        setAmount(prev => prev < 1 ? prev : prev + value)
    }

    return (
        <div className="cart-item">
            <img src={"/images/pizzas/" + prop.image + ".webp"} alt="cart item"/>
            <div className="text-content">
                <h1>{prop.title}</h1>
                <p>Состав: лук, перец, мясо, соус</p>
            </div>
            <div className="quantity-regulation">
                <button onClick={() => amount > 1 && accumulateAmount(-1)}>-</button>
                <h2>{amount}</h2>
                <button onClick={() => accumulateAmount(1)}>+</button>
            </div>
            <h4>{prop.price*amount} BYN</h4>
            <button onClick={() => deleteItem()}>×</button>
        </div>
    );
};

export default CartItem;