import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import SignUp from "./components/Authentication/SignUp.jsx";
import Login from "./components/Authentication/Login.jsx";
import ShoppingLists from "./components/ShoppingLists/ShoppingLists.jsx";
import ShoppingList from "./components/ShoppingLists/ShoppingList";

const App = () => {
    return (
        <BrowserRouter>
            <h1>Awesome Shopping App</h1>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/lists"}>My Lists</Link>
            <Switch>
                <Route path={"/login"} exact component={Login}/>
                <Route path={"/signup"} exact component={SignUp}/>
                <Route path={"/lists"} exact component={ShoppingLists}/>
                <Route path={"/lists/:id"} exact component={ShoppingList}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
