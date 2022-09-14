import React, { Component } from 'react';
import { DataContext } from '../../contexts/data';
import { Nav } from './style';

class Navigation extends Component {

    static contextType = DataContext;

    render() {
        const { toggleCategory, selectedCategory, categories } = this.context;

        return (
            <Nav selectedIndex={selectedCategory}>
                <ul>
                    {categories.map((category, index) =>
                        <li key={index} onClick={() => toggleCategory(index, category.name)}>{category.name.toUpperCase()}</li>
                    )}
                </ul>
            </Nav>
        );
    }
}

export default Navigation;