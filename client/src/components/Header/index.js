import React, { Component } from 'react';
import Action from '../Action';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { Caption } from './style';

class Header extends Component {
    render() {
        return (
            <Caption>
                <Navigation />
                <Logo />
                <Action />
            </Caption>
        );
    }
}

export default Header;