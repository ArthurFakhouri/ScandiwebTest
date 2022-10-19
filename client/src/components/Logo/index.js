import React from 'react';
import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import BrandIcon from '../../assets/brandIcon.svg';
import { LogoContainer } from './style';

class Logo extends PureComponent {

    render() {
        const { history } = this.props;

        return (
            <LogoContainer>
                <img onClick={()=>history.push("/")} src={BrandIcon} alt="Brand Icon" />
            </LogoContainer>
        );
    }
}

export default withRouter(Logo);