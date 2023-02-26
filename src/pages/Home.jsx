import React, {useState, useContext, useRef, useEffect} from 'react';
import "../styles/styles.scss"
import FilterPanel from "../components/FilterPanel/FilterPanel";
import Card from "../components/Card/Card";
import {Link} from "react-router-dom";
import ThemeContext from "../context";

const Home = () => {
    //localStorage.clear()
    const isStyled = useRef(false)
    const [favoritesCount, setFavoritesCount] = useState(0)
    const {
        inputValue,
        setInputValue,
        favorites,
        pizzas,
        setPizzas,
        showBtn,
        setShowBtn,
        cartItems,
        jsonPizzas
    } = useContext(ThemeContext)
    console.log('список избранных пицц ',favorites)
    function hintsList() {
        isStyled.current = false
        if (inputValue !== '') {
            const hintsArray = jsonPizzas.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
            hintsArray.length > 0 ? isStyled.current = true : isStyled.current = false
            return hintsArray.slice(0,5)
        }
        return []
    }

    function moveToChosen(item) {
        setPizzas([...jsonPizzas].sort(function(x,y){
            return x.id === item.id ? -1 : y.id === y.id ? 1 : 0;
        }).slice(0,12));
        window.scrollTo(0,1680)
        document.querySelector('.card-list').querySelector('.card').style.border = "2px solid #fcc200"
        setTimeout(() => {
            document.querySelector('.card-list').querySelector('.card').style.border = "none"
        }, 5000)
    }





    useEffect(()=>{
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        const favoritesPizzas = JSON.parse(localStorage.getItem('favorites')) || []
        setFavoritesCount(favoritesPizzas.length)
    },[favorites, setFavoritesCount])

    console.log(favoritesCount)

    return (
        <div className="wrapper">
            <header>
                <nav>
                    <ul className="left-side-content">
                        <li><a href="#sec1">Про нас</a></li>
                        <li><a href="#sec2">Каталог продукции</a></li>
                        <li><a href="#sec3">Партнёры</a></li>
                        <li><a href="#sec4">Акции</a></li>
                        <li><a href="#sec3">Контакты</a></li>
                    </ul>
                    <div className="right-side-content">
                        <div className="login-group">
                            <img src="/images/auth-door.png" alt=""/>
                            <Link to="/login" className="link">
                                <pre>Вход  </pre>
                            </Link>
                        </div>
                        |
                        <Link to="/registration" className="link">
                            <pre>  Регистрация</pre>
                        </Link>
                    </div>
                </nav>
            </header>
            <main>
                <section className="welcome-screen">
                    <div className="onload-image">
                        <img src='/images/React.png' alt='logo' className='logo'/>
                        <div className="top-content">
                            <div className="search" style={ isStyled.current ? { borderRadius: "20px 20px 0 0" } : { borderRadius: "20px" } }>
                                <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
                                <img src="/images/lope.png" alt=""/>
                                <div className="hints">
                                    {hintsList().map((item, index) => {
                                        return (
                                            <span key={index} onClick={() => moveToChosen(item)}>
                                                        <p>{item.title}</p>
                                                        <p>{item.price}р</p>
                                                </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="selected-products">
                                <Link to={"/favorites"}>
                                    <div className="favorites">
                                        <span>{favoritesCount}</span>
                                        <img src="/images/heart.png" alt=""/>
                                    </div>
                                </Link>
                                <Link to={"/cart"}>
                                    <div className="cart-items">
                                        <span>{cartItems.length}</span>
                                        <img src="/images/shopping-cart.png" alt=""/>
                                    </div>
                                </Link>
                                <p>{cartItems.reduce((prev, current)=> prev + current.price ,0)} руб</p>
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
                </section>
                <section className="share-block" id="sec4">
                    <div className="share-title">
                        <h1>Акция</h1>
                        <h1>1 + 1 = 3!</h1>
                    </div>
                    <div className="share-content">
                        <div className="arrow">
                            <svg fill="#000000" width="35px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z" fillRule="event"/>
                            </svg>
                        </div>

                        <div className="arrow">
                            <svg fill="#000000" width="35px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="m1304.824 345.002-81.25 81.249 476.466 476.582H0v114.922h1700.04l-476.466 476.465 81.25 81.25L1920 960.293z" fillRule="event"/>
                            </svg>
                        </div>
                    </div>
                </section>
                <section className="pizza-catalog" id="sec2">
                    <FilterPanel />
                    <div className="card-list">
                        {pizzas.map((item, index) => {
                            const isFavorite = JSON.parse(localStorage.getItem('favorites')).some((pizzas) => {
                                return pizzas.id === item.id;
                            });

                            return (
                                <Card
                                    prop={item}
                                    key={index}
                                    isFavorite={isFavorite}
                                />
                            );
                        })}
                    </div>
                    <div className={showBtn && pizzas.length >= 11 ? "show-all" : "hideElement"}>
                        <button onClick={() => {
                            setShowBtn(false)
                            setPizzas(jsonPizzas)
                        }}>Показать все пиццы</button>
                    </div>
                    <div className="decoration red" style={{ left: "-350px" }}></div>
                    <div className="decoration green" style={{ right: "-350px" }}></div>

                </section>
                <section className="about" id="sec1">
                    <div>
                        <h3>О нашем продукте</h3>
                        <p>В нашем интернет-магазине пиццерии мы готовим пиццу с максимальным вниманием к деталям. Наши пиццы выпекаются в печи с дымом из древесины, что придает им неповторимый вкус и аромат. Мы используем только свежие ингредиенты и специи, чтобы дать вам настоящий вкус Италии. Наслаждайтесь каждым кусочком, заказывая пиццу в нашем интернет-магазине!</p>
                    </div>
                </section>
            </main>
            <footer id="sec3">
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
                                        <img src="/images/mobile-phone.png" alt=""/>
                                    </div>
                                    <div className="mobile-text">
                                        <p>+375 (25) 539-42-00</p>
                                        <p>Девочки, звоните, не пожалеете</p>
                                    </div>
                                </div>
                                <div className="second-mobile">
                                    <div className="image-block">
                                        <img src="/images/mobile-phone.png" alt=""/>
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
                                        <img src="/images/mail.png" alt=""/>
                                    </div>
                                    <p>bbadboy1337@gmail.com</p>
                                </div>
                                <div className="second-mail">
                                    <div className="image-block">
                                        <img src="/images/mail.png" alt=""/>
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