import React, {useContext, useState} from 'react';
import Modal from "../Modal/Modal";
import ThemeContext from "../../context";


const Card = ({ prop, isFavorite} ) => {
    const {favorites,setFavorites} = useContext(ThemeContext)
    const [isOpened, setIsOpened] = useState(false)
    const [isFavoriteState, setIsFavoriteState] = useState(isFavorite)

    function addToFavorites(favoritePizza) {
        const index = favorites.findIndex((i) => i.id === favoritePizza.id);
        if (index === -1) {
            const newFavoritesPizzas = [...favorites, favoritePizza];
            setFavorites(newFavoritesPizzas);
            localStorage.setItem('favorites', JSON.stringify(newFavoritesPizzas));
            setIsFavoriteState(!isFavoriteState)
        } else {
            const newFavoritesPizzas = [...favorites];
            newFavoritesPizzas.splice(index, 1);
            setFavorites(newFavoritesPizzas);
            localStorage.setItem('favorites', JSON.stringify(newFavoritesPizzas));
            setIsFavoriteState(!isFavoriteState)
        }
    }

    return (
        <div className="card">
            <div className="image-block">
                <img src={"/images/pizzas/" + prop.image + ".webp"} alt="Ветчина и сыр"/>
            </div>
            <div className="info">
                <p className="name">{prop.title}</p>
                <p className="cost">от {prop.price} рублей</p>
                <div className="interact-btns">
                    <img
                        src={isFavoriteState ? "/images/liked.png" : "/images/unliked.png"}
                        onClick={() => {
                            addToFavorites(prop)
                        }}
                        alt=""/>
                    <div className="add-to-cart" onClick={() => {
                        setIsOpened(true)

                    }}>
                        <button>Выбрать</button>
                    </div>
                </div>
            </div>
            {
                isOpened ?
                    <Modal
                        prop={prop}
                        isOpened={isOpened}
                        setIsOpened={setIsOpened}
                    /> : null
            }
        </div>
    );
};

export default Card;