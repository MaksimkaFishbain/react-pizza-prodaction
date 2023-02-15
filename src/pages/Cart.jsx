import React, {useContext, useState} from 'react';
import CartItem from "../components/CartItem/CartItem";
import {Link} from "react-router-dom";
import ThemeContext from "../context";

const Cart = () => {
    const [amount, setAmount] = useState(1)
    const {cartItems, setCartItems} = useContext(ThemeContext)

    const cost = cartItems.reduce((acc, cur) => acc + cur.price * amount, 1)

    return (
        <div className="cart">
            <div className="cart-info">
                <div>
                    <h1>КОРЗИНА</h1>
                    <Link to={"/"} className="link" style={{ color: "black" }}>
                        <div className="go-back">
                            <img src="/images/go-back-arrow.png" alt="arrow"/>
                            <p>вернуться к каталогу</p>
                        </div>
                    </Link>
                </div>
                <p>(4 продукта(-ов) внутри)</p>
            </div>
            <div className="catalog cart">
                {
                    cartItems.map((item, index) =>
                        <CartItem
                            prop={item}
                            amount={amount}
                            setAmount={setAmount}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            key={index}/>
                    )
                }
            </div>
            <div className="order-content">
                <div className="invoice">Итого: {cost} BYN</div>
                <button>Оформить заказ</button>
            </div>
            <div className="cart-footer">

            </div>
                {/*<div className="decoration green" style={{ left: "-350px" }}></div>*/}
        </div>
    );
};

export default Cart;