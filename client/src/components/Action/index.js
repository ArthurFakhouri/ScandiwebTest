import React, { Component } from 'react';
import CartHeader from '../CartHeader';
import Currency from '../Currency';
import { Actions } from './style';

class Action extends Component {
    render() {
        return (
            <Actions>
                <Currency />
                <CartHeader />
            </Actions>
        );
    }
}

export default Action;