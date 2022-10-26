import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { DataContext } from './contexts/data';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Product from './pages/Product';
import { Main } from './style';

class Routes extends PureComponent {
    static contextType = DataContext;

    render() {

        const { categories, isLookingCart, mainRef, prefHeight } = this.context;

        return (
            <BrowserRouter>
                <Header />
                <Main ref={mainRef} isLookingCart={isLookingCart}
                    height={prefHeight?prefHeight+"px":"auto"}>
                    <Switch>
                        <Route path='/product/:productId'><Product /></Route>
                        <Route path='/cart'><Cart /></Route>
                        {categories.map(({name: category}, index)=> 
                        category !== "all"?<Route key={index} path={"/"+category}><Category /></Route>:"")}
                        <Route exact path='/'><Category /></Route>
                        <Route path='*'>Error</Route>
                    </Switch>
                </Main>
            </BrowserRouter>
        );
    }
}

export default Routes;