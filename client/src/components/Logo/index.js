import React from 'react';
import { PureComponent } from 'react';
import BrandIcon from '../../assets/brandIcon.svg';
import { LogoContainer } from './style';

class Logo extends PureComponent {
    render() {
        return (
            <LogoContainer>
                <img src={BrandIcon} alt="Brand Icon" />
            </LogoContainer>
        );
    }
}

export default Logo;