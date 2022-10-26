import React from 'react';
import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import BrandIcon from '../../assets/brandIcon.svg';
import { DataContext } from '../../contexts/data';
import { LogoContainer } from './style';

class Logo extends PureComponent {
    static contextType = DataContext;

    render() {
        const { toggleCategory } = this.context;
        const { history } = this.props;

        return (
            <LogoContainer>
                <img onClick={async () => { await toggleCategory(0, "all"); history.push('/')}} src={BrandIcon} alt="Brand Icon" />
            </LogoContainer>
        );
    }
}

export default withRouter(Logo);