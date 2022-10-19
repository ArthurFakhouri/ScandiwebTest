import React, { PureComponent } from 'react';
import { BagItem, Brand, Data, Gallery, Image, Name, Price, Quantity, Section, SelectImage } from './style';
import Attributes from '../Attributes';
import { DataContext } from '../../contexts/data';

class BagItems extends PureComponent {
    static contextType = DataContext;

    constructor(props) {
        super(props);

        this.state = {
            galleryIndex: [],
        }
    }

    componentDidMount() {
        let bag = [];
        if(JSON.parse(localStorage.getItem("bag")))
            bag = JSON.parse(localStorage.getItem("bag"));
        let indexList = Array(bag.length).fill(0);
        this.setState({ galleryIndex: indexList });
    }

    handleChangeImage(value, pos, length) {
        let gallery = this.state.galleryIndex;
        let index = gallery[pos];
        index += value;
        if (index < 0)
            index = length - 1;
        if (index === length)
            index = 0;
        gallery[pos] = index;
        this.setState({ galleryIndex: gallery });
        this.forceUpdate();
    }

    render() {
        const { bag, selectedCurrency, handleAddToCart } = this.context;

        return (
            <>
                {bag.map((item, index) => {
                    const { amount, product, selectedAttributes } = item;
                    const { prices, attributes, gallery, name, brand } = product;
                    const { theme, disabled = false } = this.props;
                    const imageIndex = this.state.galleryIndex[index]?this.state.galleryIndex[index]:0;
                    return (
                        <BagItem key={index}>
                            <Data>
                                <Brand theme={theme}>{name}</Brand>
                                <Name theme={theme}>{brand}</Name>
                                <Price theme={theme}>{prices[selectedCurrency].currency.symbol}{prices[selectedCurrency].amount}</Price>
                                <Attributes disabled={disabled} theme={theme} attributes={attributes} selectedAttributes={selectedAttributes} />
                            </Data>
                            <Section>
                                <Quantity theme={theme}>
                                    <button onClick={(event) => handleAddToCart(event, product, 1, selectedAttributes)}>+</button>
                                    <span>{amount}</span>
                                    <button onClick={(event) => handleAddToCart(event, product, -1, selectedAttributes)}>-</button>
                                </Quantity>
                                <Gallery theme={theme}>
                                    {theme === "cart-overlay" ?
                                        <Image selected={true} src={gallery[0]} alt={`${brand} ${name}`} /> :
                                        gallery.map((image, indexImage) =>
                                            <Image selected={indexImage === imageIndex ? true : false}
                                                key={indexImage} src={image} alt={name + indexImage} />
                                        )
                                    }
                                    {theme !== "cart-overlay" && gallery.length > 1 ?
                                        <SelectImage>
                                            <button onClick={() => this.handleChangeImage(-1, index, gallery.length)}>&lt;</button>
                                            <button onClick={() => this.handleChangeImage(1, index, gallery.length)}>&gt;</button>
                                        </SelectImage>
                                        :
                                        ""
                                    }
                                </Gallery>
                            </Section>
                        </BagItem>
                    )
                })}
            </>
        );
    }
}

export default BagItems;