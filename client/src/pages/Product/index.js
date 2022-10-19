import axios from 'axios';
import React, { PureComponent } from 'react';
import { withRouter } from "react-router";
import Attributes from '../../components/Attributes';
import { client, getProduct } from '../../services/api';
import { Brand, Container, Data, Gallery, Image, MainImage, Name, PriceText, Price, AddToCart, Description } from './style';
import { DataContext } from '../../contexts/data';
import { toast } from 'react-toastify';

class Product extends PureComponent {
    static contextType = DataContext;

    constructor(props) {
        super(props);

        this.state = {
            product: {},
            selected: 0
        }
    }

    handleAddToCartClick(event, product, amount, attributes) {
        const { handleAddToCart } = this.context;
        const { history } = this.props;
        handleAddToCart(event, product, amount, attributes);
        toast.success("The product has been added into the bag!");
        history.goBack();
    }

    async componentDidMount() {
        const { productId } = this.props.match.params;
        const queryResult = await axios.post(client, { query: getProduct, variables: { id: productId } });
        const result = queryResult.data.data.product;
        const selectedAttributes = Array(result.attributes.length).fill(0);
        const { setSelectedAttributes } = this.context;
        setSelectedAttributes(selectedAttributes, 0, 0);

        this.setState({ product: result, selectedAttributes });
    }

    render() {
        const { selectedCurrency, selectedAttributes } = this.context;
        const { product, selected } = this.state;
        const { gallery, name, brand, attributes, prices, description, inStock } = product;
        let currency, amount;
        if (prices) {
            currency = prices[selectedCurrency].currency;
            amount = prices[selectedCurrency].amount;
        }

        return (
            <Container>
                {Object.keys(product).length &&
                    <>
                        <Gallery>
                            {gallery.map((image, index) =>
                                <li key={index}>
                                    <Image selected={index === selected ? true : false}
                                        src={image} alt={name + index}
                                        onMouseEnter={() => this.setState({ selected: index })} />
                                </li>
                            )}
                        </Gallery>
                        <MainImage src={gallery[selected]} alt={name + selected} />
                        <Data>
                            <Brand>{brand}</Brand>
                            <Name>{name}</Name>
                            <Attributes theme={"cart-product"}
                                attributes={attributes}
                                selectedAttributes={selectedAttributes} />
                            <PriceText>Price</PriceText>
                            <Price>{currency.symbol}{amount}</Price>
                            <AddToCart inStock={inStock} 
                            onClick={(event) =>
                             this.handleAddToCartClick(event, product, 1, selectedAttributes)}>
                                Add to cart
                            </AddToCart>
                            <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
                        </Data>
                    </>
                }
            </Container>
        );
    }
}

export default withRouter(Product);