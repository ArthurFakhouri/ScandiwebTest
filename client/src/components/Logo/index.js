import React from 'react';
import { Component } from 'react';
import BrandIcon from '../../assets/brandIcon.svg';
import { LogoContainer } from './style';

class Logo extends Component {
    render() {
        return (
            <LogoContainer>
                <img src={BrandIcon} alt="Brand Icon" />
            </LogoContainer>
        );
    }
}

export default Logo;