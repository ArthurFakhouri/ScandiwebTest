import axios from 'axios';
import React, { PureComponent } from 'react';
import { createContext } from 'react';
import { client, getCategory } from '../services/api';
import { arrayEquals } from '../utils/cartFunctions';

export const DataContext = createContext({});

class DataProvider extends PureComponent {

    state = {
        selectedCategory: 0,
        selectedCurrency: 0,
        selectedAttributes: [],
        isSelectingCurrency: false,
        isLookingCart: false,
        mainRef: React.createRef(),
        prefHeight: 0,
        currencies: [],
        categories: [],
        products: [],
        bag: []
    };
    setHeaderData = ({ categories, currencies }) => {
        this.setState({ categories, currencies })
    }
    setBag = (bag) => {
        let result = [];
        if (bag)
            result = bag;
        localStorage.setItem("bag", JSON.stringify(bag));
        this.setState({ bag: result });
    }
    setSelectedAttributes = (selectedAttributes, pos, value) => {
        if (selectedAttributes.length)
            selectedAttributes[pos] = value;
        this.setState({ selectedAttributes });
        this.forceUpdate();
    }
    toggleCurrency = (index) => {
        localStorage.setItem("currencyIndex", index);
        this.setState({ selectedCurrency: index });
    }
    toggleActive = (event, isSelectingCurrency, isLookingCart) => {
        const mainHeight = this.state.mainRef.current.children[0].offsetHeight + 80;
        let prefHeight = 0;
        if (isLookingCart) {
            prefHeight = mainHeight > window.innerHeight ? mainHeight : window.innerHeight;
        }
        this.setState({ isSelectingCurrency, isLookingCart, prefHeight });
        event.stopPropagation();
    }
    toggleCategory = async (index, categoryName) => {
        const queryResult = await axios.post(client, { query: getCategory, variables: { title: categoryName } });
        const result = queryResult.data.data.category.products;
        index = Number(index);
        localStorage.setItem("categoryIndex", index);
        this.setState({ selectedCategory: index, products: result });
    }
    getSelectedAttributes(product, attributes) {
        let selectedAttributes = [];
        if (product.attributes.length) {
            selectedAttributes = Array(product.attributes.length).fill(0);
            if (attributes.length) {
                selectedAttributes = attributes;
            }
        }
        return selectedAttributes;
    }
    handleAddToCart = (event, product, amount, attributes) => {
        let bag = [];
        let selectedAttributes = this.getSelectedAttributes(product, attributes);
        let indexProduct = -1;

        if (JSON.parse(localStorage.getItem("bag"))) {
            bag = [...JSON.parse(localStorage.getItem("bag"))];
            indexProduct = bag.findIndex((item) => {
                return item.product.id === product.id &&
                    arrayEquals(item.selectedAttributes, selectedAttributes);
            })
        }
        if (indexProduct > -1) {
            bag[indexProduct].amount += amount;
            if (bag[indexProduct].amount < 1)
                bag.splice(indexProduct, 1);
        } else {
            bag.push({ product, amount, selectedAttributes: [...selectedAttributes] });
        }
        this.setBag(bag);
        if (event.target.tagName === "IMG")
            this.toggleActive(event, false, false);
        event.stopPropagation();
    }

    render() {
        return (
            <DataContext.Provider value={{
                ...this.state, setHeaderData: this.setHeaderData, setBag: this.setBag,
                toggleCurrency: this.toggleCurrency, toggleActive: this.toggleActive,
                toggleCategory: this.toggleCategory, handleAddToCart: this.handleAddToCart,
                setSelectedAttributes: this.setSelectedAttributes
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataProvider;