import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (

      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Login} />
          <Route exact path="/auth" component={Register} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/cart" component={Cart} />
      </Switch>
    );
}

export default App;
