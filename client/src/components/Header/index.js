import React, { PureComponent } from 'react';
import Action from '../Action';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { Caption } from './style';

class Header extends PureComponent {
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