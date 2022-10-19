import React, { PureComponent } from 'react';
import { Bag, Container } from './style';
import { DataContext } from '../../contexts/data';
import BagItems from '../../components/BagItems';
import Payment from '../../components/Payment';

class Cart extends PureComponent {
    static contextType = DataContext;

    render() {

        return (
            <Container>
                <span>Cart</span>
                <Bag>
                    <BagItems theme="cart-product" disabled={true}/>
                </Bag>
                <Payment />
            </Container>
        );
    }
}

export default Cart;