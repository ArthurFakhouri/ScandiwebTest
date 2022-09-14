import React, { Component } from 'react';
import { DataContext } from '../../contexts/data';
import { getTotal } from '../../utils/cartFunctions';
import BagItems from '../BagItems';
import { Actions, Bag, Container, Title, Total } from './style';

class CartOverlay extends Component {

    static contextType = DataContext;

    handleViewBagClick() {
        window.location.href = "/cart";
    }

    render() {
        const { selectedCurrency, isLookingCart, bag, currencies, setBag } = this.context;
        const itemsLength = bag.reduce((prevValue, curValue) => prevValue + curValue.amount, 0);
        const { symbol, total } = getTotal(bag, selectedCurrency, currencies);
        let textBagLength = "";
        if (itemsLength < 1)
            textBagLength = "empty"
        else if (itemsLength === 1)
            textBagLength = "1 item"
        else
            textBagLength = `${itemsLength} items`

        return (
            <Container active={isLookingCart}>
                <Title>My Bag, <span>{textBagLength}</span></Title>
                <Bag>
                    <BagItems theme="cart-overlay" disabled={true} />
                </Bag>
                <Total>
                    <span>Total</span>
                    <span>{symbol}{total}</span>
                </Total>
                <Actions>
                    <button onClick={this.handleViewBagClick}>VIEW BAG</button>
                    <button onClick={()=>setBag([])}>CHECK OUT</button>
                </Actions>
            </Container>
        );
    }
}

export default CartOverlay;