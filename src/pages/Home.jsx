import React, {useState} from 'react';
import "../styles/styles.scss"
import FilterPanel from "../components/FilterPanel/FilterPanel";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import {Link} from "react-router-dom";

const jsonPizzas = require("../data/cards.json")

const Home = () => {

    const [pizzas, setPizzas] = useState(jsonPizzas.slice(0,12))
    const [showBtn, setShowBtn] = useState(true)
    console.log(showBtn)
    return (
        <div className="wrapper">
            <header>
                <nav>
                    <ul className="left-side-content">
                        <li>Про нас</li>
                        <li>Каталог продукции</li>
                        <li>Оплата и доставка</li>
                        <li>Партнёры</li>
                        <li>Акции</li>
                        <li>Контакты</li>
                    </ul>
                    <div className="right-side-content">
                        <div className="login-group">
                            <img src="/images/auth-door.png" />
                            <Link to={"/auth"} style={{ textDecoration: 'none', color: "white" }}>
                                <pre>Вход  </pre>
                            </Link>
                        </div>
                        |
                        <Link to={"/auth"} style={{ textDecoration: 'none', color: "white" }}>
                            <pre>  Регистрация</pre>
                        </Link>
                    </div>
                </nav>
                <div className="welcome-screen">
                    <div className="onload-image">
                        <div className="top-content">
                            <div className="search">
                                <input type="text" placeholder="Поиск..."/>
                                <img src="/images/lope.png"/>
                            </div>
                            <div className="selected-products">
                                <Link to={"/favorites"}>
                                    <div className="favorites">
                                        <img src="/images/heart.png" />
                                    </div>
                                </Link>
                                <Link to={"/cart"}>
                                    <div className="cart-items">
                                        <img src="/images/shopping-cart.png" />
                                    </div>
                                </Link>
                                <p>0,0 руб</p>
                            </div>
                        </div>
                        <div className="welcome-phrase">
                    <pre>
                        Наша этюд - приготовить больше блюд.
                    </pre>
                            <pre>
                                       А хотя нет, иди нахуй
                    </pre>
                            <pre>                                   ⓒ Конфуций    </pre>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="share-block">
                    <div className="share-title">
                        <h1>Акция</h1>
                        <h1>1 + 1 = 3!</h1>
                    </div>
                    <div className="share-content">
                        <div className="arrow">
                            {/*<?xml version="1.0" encoding="utf-8"?>*/}
                            <svg fill="#000000" width="35px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z" fillRule="event"/>
                            </svg>
                        </div>
                        <div className="cards-list">
                            <div className="card share">
                                <div className="image-block">
                                    <img src="/images/pizzas/vetchina-i-sir.png" alt="Ветчина и сыр"/>
                                </div>
                                <div className="info">
                                    <p className="name">Ветчина и сыр</p>
                                    <p className="cost">20 руб</p>
                                    <div className="go-to-checkout">
                                        <p>Выбрать</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card share">
                                <div className="image-block">
                                    <img src="/images/pizzas/vetchina-i-sir.png" alt="Ветчина и сыр"/>
                                </div>
                                <div className="info">
                                    <p className="name">Ветчина и сыр</p>
                                    <p className="cost">20 руб</p>
                                    <div className="go-to-checkout">
                                        <p>Выбрать</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card share">
                                <div className="image-block">
                                    <img src="/images/pizzas/vetchina-i-sir.png" alt="Ветчина и сыр"/>
                                </div>
                                <div className="info">
                                    <p className="name">Ветчина и сыр</p>
                                    <p className="cost">20 руб</p>
                                    <div className="go-to-checkout">
                                        <p>Выбрать</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card share">
                                <div className="image-block">
                                    <img src="/images/pizzas/vetchina-i-sir.png" alt="Ветчина и сыр"/>
                                </div>
                                <div className="info">
                                    <p className="name">Ветчина и сыр</p>
                                    <p className="cost">20 руб</p>
                                    <div className="go-to-checkout">
                                        <p>Выбрать</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="arrow">
                            <svg fill="#000000" width="35px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z" fillRule="event"/>
                            </svg>
                        </div>
                    </div>
                </section>
                <section className="pizza-catalog">
                    <FilterPanel pizzas={pizzas} setPizzas={setPizzas} jsonPizzas={jsonPizzas}/>
                    <div className="card-list">
                        {pizzas.map((item, index) => {
                            return <Card prop={item} key={index}/>
                        })}
                    </div>
                    <div className={showBtn && pizzas.length >= 11 ? "show-all" : "hideElement"}>
                        <button onClick={() => {
                            setShowBtn(false)
                            setPizzas(jsonPizzas)
                        }}>Показать все</button>
                    </div>
                </section>
                <section className="about">
                    <div>
                        <h3>О нашем продукте</h3>
                        <p>В нашем интернет-магазине пиццерии мы готовим пиццу с максимальным вниманием к деталям. Наши пиццы выпекаются в печи с дымом из древесины, что придает им неповторимый вкус и аромат. Мы используем только свежие ингредиенты и специи, чтобы дать вам настоящий вкус Италии. Наслаждайтесь каждым кусочком, заказывая пиццу в нашем интернет-магазине!</p>
                    </div>
                </section>
            </main>
            <footer>
                <p id="gratitude">Отвечаем за качество!</p>
                <div className="footer-content">
                    <div className="footer-grid">
                        <div className="footer-info">
                            <p>Информация</p>
                            <p>Наша команда</p>
                            <p>Оплата и доставка</p>
                            <p>Партнёры</p>
                        </div>
                        <div className="footer-stuff">
                            <p>Товары</p>
                            <p>Каталог продукции</p>
                            <p>Состав пицц</p>
                            <p>Соусы</p>
                            <p>Ингридиенты</p>
                            <p>Напитки</p>
                        </div>
                        <div className="footer-contacts">
                            <p style={{padding: "0 0 25px 0"}}>Контакты</p>
                            <div className="mobile">
                                <div className="first-mobile">
                                    <div className="image-block">
                                        <img src="/images/mobile-phone.png" />
                                    </div>
                                    <div className="mobile-text">
                                        <p>+375 (25) 539-42-00</p>
                                        <p>Девочки, звоните, не пожалеете</p>
                                    </div>
                                </div>
                                <div className="second-mobile">
                                    <div className="image-block">
                                        <img src="/images/mobile-phone.png" />
                                    </div>
                                    <div className="mobile-text">
                                        <p>+375 (29) 191-98-76</p>
                                        <p>Заплатите за интернет плз</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mail">
                                <div className="first-mail">
                                    <div className="image-block">
                                        <img src="/images/mail.png" />
                                    </div>
                                    <p>bbadboy1337@gmail.com</p>
                                </div>
                                <div className="second-mail">
                                    <div className="image-block">
                                        <img src="/images/mail.png" />
                                    </div>
                                    <p>kholyavskij@mail.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;