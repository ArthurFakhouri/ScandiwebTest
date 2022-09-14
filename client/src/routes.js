import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Product from './pages/Product';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/product/:productId'><Product /></Route>
                    <Route path='/cart'><Cart /></Route>
                    <Route path='/'><Category /></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;