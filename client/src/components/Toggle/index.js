import React, { Component } from 'react'
import { DataContext } from '../../contexts/data';
import { Base, Stick1, Stick2, Toggler } from './style'

export default class Toggle extends Component {
    static contextType = DataContext;

    render() {

        const { setSelectedAttributes } = this.context;
        const { toggle, theme, selectedAttributes
            , pos, value, disabled } = this.props;

        return (
            <Base theme={theme} disabled={disabled}
                onClick={() => setSelectedAttributes(selectedAttributes, pos, value?0:1)}>
                <Toggler toggle={toggle}>
                    <Stick1 toggle={toggle} />
                    <Stick2 toggle={toggle} />
                </Toggler>
            </Base>
        )
    }
}
