import React from 'react';
import logo from './static/images/mock_con_logo.svg';
import { PageHeader, Brand } from '@patternfly/react-core';

export default props => {

    const logoProps = {
        href: '',
        onClick: () => props.history.push('/newsfeed')
    }

    return (
        <PageHeader
            logo={<Brand src={logo} alt='Mock Con News Feed'/>}
            logoProps={logoProps}
            showNavToggle
            isNavOpen={props.isNavOpen}
            onNavToggle={() => props.onNavToggle()}
        />
    );

}