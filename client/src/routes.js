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

    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
    }

    render() {

        const { categories, isLookingCart, bodyHeight } = this.context;
        let mainHeight = 0;
        if (this.mainRef.current && this.mainRef.current.children[0]) 
            mainHeight = this.mainRef.current.children[0].offsetHeight;

        return (
            <BrowserRouter>
                <Header />
                <Main ref={this.mainRef} isLookingCart={isLookingCart}
                    height={mainHeight > bodyHeight ? mainHeight + 80 : bodyHeight}>
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