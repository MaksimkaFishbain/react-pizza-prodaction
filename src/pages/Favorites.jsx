import React from 'react';
import {Link} from "react-router-dom";
import Card from "../components/Card/Card";
import '../styles/favorites.scss'

const Favorites = () => {

    function getFavorites() {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    }

    return (
        <div className="favorites">
            <div>
                <h1>Избранные пиццы</h1>
                <Link to={"/"} className="link" style={{ color: "black" }}>
                    <div className="go-back">
                        <img src="/images/go-back-arrow.png" alt="arrow"/>
                        <p>вернуться к каталогу</p>
                    </div>
                </Link>
                <div className="catalog favorites">
                    <div className="card-list">
                        {getFavorites().map((item, index) => {
                            return (
                                <Card
                                    prop={item}
                                    key={index}
                                />

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;