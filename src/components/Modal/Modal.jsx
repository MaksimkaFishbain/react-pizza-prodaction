import React from 'react';

const Modal = ({ prop }) => {

    return (
        <div className="modal"/**className={isOpened ? "modal" : "modal.active"} onClick={() => setIsOpened(false)}**/>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-image__block">
                    <img src={"/images/pizzas/" + prop.image + ".webp"} />
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
                            <button className="selected">Маленькая</button>
                            <button>Средняя</button>
                            <button>Большая</button>
                        </div>
                        <div className="selection thickness">
                            <button className="selected">Тонкое</button>
                            <button>Толстое</button>
                        </div>
                    </div>
                    <button className="add-to-cart">Добавить в корзину | { prop.price } руб</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;