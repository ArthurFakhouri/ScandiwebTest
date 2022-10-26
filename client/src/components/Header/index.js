import React, { PureComponent } from 'react';
import Action from '../Action';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { Caption, Content } from './style';

class Header extends PureComponent {
    render() {
        return (
            <Caption>
                <Content>
                    <Navigation />
                    <Logo />
                    <Action />
                </Content>
            </Caption>
        );
    }
}

export default Header;