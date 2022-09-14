import React, { Component } from 'react';
import { OptionSelected, Options } from './style';
import KeyBoardArrowDown from '../../assets/keyboardArrowDown.svg';
import { DataContext } from '../../contexts/data';


class Currency extends Component {
    static contextType = DataContext;

    render() {

        const { currencies, selectedCurrency, toggleCurrency,
             toggleActive, isSelectingCurrency } = this.context;

        return (
            <>
                <OptionSelected active={isSelectingCurrency} onClick={(event) => toggleActive(event, !isSelectingCurrency, false)}>
                    <span>
                        {currencies.length !== 0 && currencies[selectedCurrency].symbol}
                    </span>
                    <img src={KeyBoardArrowDown} alt="Keyboard Arrow Down" />
                </OptionSelected>
                <Options active={isSelectingCurrency}>
                    {currencies.length !== 0 && currencies.map((currency, index) =>
                        <li key={index} onClick={() => toggleCurrency(index)}>{currency.symbol} {currency.label}</li>
                    )}
                </Options>
            </>
        );
    }
}

export default Currency;