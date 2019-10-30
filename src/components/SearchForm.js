import React, { useState } from 'react';
import { TextInput, Button } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons'

export default props => {

    const [value, updateValue] = useState('')
    
    const submit = (values) => {
        props.search([{
            key: 'search',
            values: values.split(' ')
        }])
    }

    return (
        <React.Fragment>
            <TextInput
                value={value}
                type='text'
                onChange={updateValue}
            />
            <Button
                variant='tertiary'
                onClick={() => submit(value)}
            >
                <SearchIcon/>
            </Button>
        </React.Fragment>
    );

}