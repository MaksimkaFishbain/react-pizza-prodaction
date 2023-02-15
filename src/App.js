import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {useState} from "react";
import ThemeContext from "./context";

const jsonPizzas = require("./data/cards.json")

function App() {
    const favoritesPizzas = JSON.parse(localStorage.getItem('favorites')) || []
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState(favoritesPizzas)
    const [pizzas, setPizzas] = useState(jsonPizzas.slice(0,12));
    const [showBtn, setShowBtn] = useState(true);
    const [inputValue, setInputValue] = useState('');

    return (
        <ThemeContext.Provider
            value={{
                cartItems,
                setCartItems,
                favorites,
                setFavorites,
                pizzas,
                setPizzas,
                showBtn,
                setShowBtn,
                inputValue,
                setInputValue,
                jsonPizzas
            }}
        >
            <Switch>
                  <Route exact path="/" render={() =>
                      <Home />} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/registration" component={Register} />
                  <Route exact path="/favorites" render={() =>
                      <Favorites
                          favorites={favorites}
                          setFavorites={setFavorites}
                      />} />
                  <Route exact path="/cart" render={() =>
                      <Cart />} />
            </Switch>
        </ThemeContext.Provider>
    );
}

export default App;
