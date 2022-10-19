import React, { PureComponent } from 'react';
import Toggle from '../Toggle';
import { Default, Color } from './style';
import { DataContext } from '../../contexts/data';

class AttributeItem extends PureComponent {
    static contextType = DataContext;

    render() {

        const { setSelectedAttributes } = this.context;
        const { theme, name, itemValue, selected,
            selectedAttributes, pos, value, disabled } = this.props;
        const nameLWC = name.toLowerCase();

        return (
            <>
                {
                    nameLWC === "size" || nameLWC === "capacity" ?
                    <Default name={nameLWC} selected={selected} theme={theme} disabled={disabled}
                        onClick={() => setSelectedAttributes(selectedAttributes, pos, value)}>
                        {itemValue}
                    </Default> :
                    nameLWC === "color" ?
                        <Color selected={selected} theme={theme} color={itemValue} disabled={disabled}
                        onClick={() => setSelectedAttributes(selectedAttributes, pos, value)} /> :
                        <>
                            {selected ?
                                <Toggle disabled={disabled} toggle={itemValue === "Yes" ? true : false} theme={theme}
                                selectedAttributes={selectedAttributes} pos={pos} value={value} /> :
                                ""
                            }
                        </>
                }
            </>
        );
    }
}

export default AttributeItem;