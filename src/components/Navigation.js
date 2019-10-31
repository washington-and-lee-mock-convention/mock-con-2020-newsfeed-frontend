import React, { useState } from 'react';
import {
    Nav, NavItem, NavList,
} from '@patternfly/react-core';

export default props => {

    const [activeItem, setActive] = useState()

    return (
        <Nav onSelect={ (item) => setActive(item.itemId) }>
            <NavList>
                <NavItem
                    title='News Feed'
                    preventDefault
                    itemId={1}
                    isActive={activeItem === 1}
                >News Feed</NavItem>
            </NavList>
        </Nav>
    );

}