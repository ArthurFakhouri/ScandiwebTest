import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { DataContext } from '../../contexts/data';
import { getAmountItemsBag, getTotal } from '../../utils/cartFunctions';
import { Order, PaymentC, SubText, Total, Value } from './style';

class Payment extends Component {
    static contextType = DataContext;

    constructor(props) {
        super(props);

        this.state = {
            tax: 21,
        }
    }

    handleClickOrder() {
        const { history } = this.props;
        const { setBag } = this.context;

        history.push('/');
        setBag([]);
    }

    render() {
        const { tax } = this.state;
        const { bag, selectedCurrency, currencies } = this.context;
        const { symbol, total } = getTotal(bag, selectedCurrency, currencies);
        const totalAmount = getAmountItemsBag(bag);
        const taxValue = (total * (tax / 100.0)).toFixed(2);

        return (
            <PaymentC>
                <SubText>Tax {tax}%: <Value>{symbol}{taxValue}</Value></SubText>
                <SubText>Quantity: <Value>{totalAmount}</Value></SubText>
                <Total>Total: <Value>{symbol}{total}</Value></Total>
                <Order onClick={() => this.handleClickOrder()}>Order</Order>
            </PaymentC>
        );
    }
}

export default withRouter(Payment);