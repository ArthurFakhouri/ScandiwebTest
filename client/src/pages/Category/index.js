import React, { PureComponent } from 'react';
import { Categories, CategoryItem, Container, Name } from './style';
import Cart from '../../assets/whiteCart.svg';
import { DataContext } from '../../contexts/data';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

class Category extends PureComponent {
    static contextType = DataContext;

    handleAddToCartClick(event, product, amount, attributes) {
        const { handleAddToCart } = this.context;
        handleAddToCart(event, product, amount, attributes);
        toast.success("The product has been added into the bag!");
    }

    componentDidMount() {
        const { toggleCategory, categories } = this.context;
        const { pathname } = this.props.location;
        let category = pathname.replace("/", "");
        if(category === "")
            category = "all";
        let index = categories.findIndex(({name})=>name === category);
        if(index < 0)
            index = 0;

        toggleCategory(index, category);
    }

    render() {
        const { categories, selectedCategory, selectedCurrency, products } = this.context;
        const { history } = this.props;
        let categoryName = "";
        if (categories.length) {
            categoryName = categories[selectedCategory].name;
        }

        return (
            <Container>
                <Name>
                    {categoryName}
                </Name>
                <Categories>
                {
                    products.map((product) => {
                        const price = product.prices[selectedCurrency];
                        return (
                            <CategoryItem key={product.id} inStock={product.inStock}
                                onClick={() => history.push(`/product/${product.id}`)}>
                                <div>
                                    <img src={product.gallery[0]} alt={product.name} />
                                    {product.inStock ?
                                        <button onClick={(event) => this.handleAddToCartClick(event, product, 1, [])}><img src={Cart} alt="Add to Cart" /></button> :
                                        <span>OUT OF STOCK</span>
                                    }
                                </div>
                                <section>
                                    <span>{product.brand} {product.name}</span>
                                    <span>{price.currency.symbol}{price.amount}</span>
                                </section>
                            </CategoryItem>
                        )
                    })
                }
                </Categories>
            </Container>
        );
    }
}

export default withRouter(Category);