import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "../components/Home";
import Item from "../components/items/Item";
import Categories from "../components/category/Categories";
import Category from "../components/category/Category";
import Cart from "../components/Cart";
import Ofertas from "../components/ofertas/Ofertas";
import Novedades from "../components/novedades/Novedades";
import Login from "../components/login/Login";
import Order from "../components/order/Order";

const Routes = () => {
	return (
	    <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/category/:id">
                <Category/>
            </Route>

            <Route path="/item/:id">
              <Item/>
            </Route>

            <Route path="/cart/">
              <Cart/>
            </Route>

            <Route path="/novedades/">
              <Novedades/>
            </Route>

            <Route path="/login/">
              <Login/>
            </Route>

            <Route path="/ofertas/">
              <Ofertas/>
            </Route>

            <Route path="/categorias/">
              <Categories/>
            </Route>

            <Route path="/order/">
              <Order/>
            </Route>

          </Switch>
            
        </BrowserRouter>
    );
}

export default Routes;

/*
            <Route exact path="/category/:id">
                <Category/>
            </Route>

            <Route path="/order">
                <Order/>
            </Route>

            <Route path="/category">
                <Categories/>
            </Route>

            <Route path="/novedades">
                <Novedades/>
            </Route>

            <Route path="/ofertas">
                <Ofertas/>
            </Route>

            <Route path="/cart">
                <Cart/>
            </Route>
*/