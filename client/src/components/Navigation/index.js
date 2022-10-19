import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { DataContext } from '../../contexts/data';
import { Nav } from './style';

class Navigation extends PureComponent {

    static contextType = DataContext;

    render() {
        const { selectedCategory, categories } = this.context;
        const { history } = this.props;

        return (
            <Nav selectedIndex={selectedCategory}>
                <ul>
                    {categories.map(({ name: category }, index) =>
                        <li key={index} onClick={() => 
                            history.push(`/${category !== "all"?category:""}`)
                        }
                        >{category.toUpperCase()}</li>
                    )}
                </ul>
            </Nav>
        );
    }
}

export default withRouter(Navigation);