import React from 'react';
import Modal from "../Modal/Modal";

const Card = ({ prop }) => {

    return (
        <div className="card">
            <div className="image-block">
                <img src={"/images/pizzas/" + prop.image + ".webp"} alt="Ветчина и сыр"/>
            </div>
            <div className="info">
                <p className="name">{prop.title}</p>
                <p className="cost">от {prop.price} рублей</p>
                <div className="go-to-checkout">
                    <p>Выбрать</p>
                </div>
            </div>
            {/*<Modal prop={prop} />*/}
        </div>
    );
};

export default Card;