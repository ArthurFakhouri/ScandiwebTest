import React, { PureComponent } from 'react';
import CartImg from '../../assets/cart.svg';
import { DataContext } from '../../contexts/data';
import { getAmountItemsBag } from '../../utils/cartFunctions';
import CartOverlay from '../CartOverlay';
import { Cart } from './style';

class CartHeader extends PureComponent {

    static contextType = DataContext;

    render() {
        const { isLookingCart, toggleActive, bag } = this.context;
        const totalAmount = getAmountItemsBag(bag);
        return (
            <>
                <Cart onClick={(event) => toggleActive(event, false, !isLookingCart)}>
                    <img src={CartImg} alt="Cart" />
                    {bag.length > 0 ?
                        <span>{totalAmount}</span> :
                        ""
                    }
                </Cart>
                <CartOverlay />
            </>
        );
    }
}

export default CartHeader;