import React, { PureComponent } from 'react';
import { DataContext } from '../../contexts/data';
import AttributeItem from '../AttributeItem';
import { Attribute, AttributesC, Options } from './style';

class Attributes extends PureComponent {
    static contextType = DataContext;

    render() {

        const { theme, attributes, selectedAttributes, disabled } = this.props;

        return (
            <AttributesC theme={theme}>
                {attributes.map((attribute, index) =>
                    <Attribute key={index} theme={theme} name={attribute.name.toLowerCase()}>
                        <span>{attribute.name}:</span>
                        <Options>
                            {attribute.items.map((item, indexItem) =>
                                <AttributeItem key={indexItem}
                                    selected={selectedAttributes[index] === indexItem ? true : false}
                                    theme={theme} disabled={disabled} name={attribute.name} itemValue={item.value}
                                    selectedAttributes={selectedAttributes} pos={index} value={indexItem}
                                />)}
                        </Options>
                    </Attribute>
                )}
            </AttributesC>
        );
    }
}

export default Attributes;