import React, {useContext, useState} from 'react';
import ThemeContext from "../../context";

const Modal = ({ prop, isOpened, setIsOpened }) => {
    const [pizzaInfo, setPizzaInfo] = useState(['Маленькая', 'Тонкая'])

    const {cartItems, setCartItems} = useContext(ThemeContext)

    return (
        <div className={isOpened ? "modal" : "modal.hide"} onClick={() => setIsOpened(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-image__block">
                    <img src={"/images/pizzas/" + prop.image + `.webp`} alt=""/>
                </div>
                <div className="modal-info">
                    <p>{ prop.title }</p>
                    <div className="size-weight">
                        <span>30 см, 640гр</span>
                    </div>
                    <div className="ingredients">
                        <span>Состав: лук, перец, мясо, соус</span>
                    </div>
                    <div className="pizza-setting">
                        <div className="selection size">
                            {
                                ['Маленькая', 'Средняя', 'Большая'].map((i, index) => {
                                    return <button className={i === pizzaInfo[0] ? "selected" : null}
                                                   onClick={() => setPizzaInfo([i, pizzaInfo[1]])}
                                                   key={index}
                                    >{i}</button>
                                })
                            }
                        </div>
                        <div className="selection thickness">
                            {
                                ['Тонкая', 'Толстое'].map((i,index) => {
                                    return <button className={i === pizzaInfo[1] ? "selected" : null}
                                                   onClick={() => setPizzaInfo([pizzaInfo[0], i])}
                                                   key={index}
                                    >{i}</button>
                                })
                            }
                        </div>
                    </div>
                    <button className="add-to-cart" onClick={() => {
                        prop.info = pizzaInfo
                        setCartItems([...cartItems, prop ])
                        setIsOpened(false)
                    }}>
                        Добавить в корзину | { prop.price } руб

                    </button>
                </div>
                <div className="modal-close" onClick={() => setIsOpened(false)}>&#215;</div>
            </div>
        </div>
    );
};

export default Modal;