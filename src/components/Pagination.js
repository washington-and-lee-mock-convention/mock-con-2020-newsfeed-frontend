import React from 'react';
import {
    Pagination
} from '@patternfly/react-core';
import { setPageNum, setPageSize } from '../actions';

export default props => {

    const updatePageSize = (size) => {
        props.dispatch(setPageSize(size));
        
    }

    const updatePageNum = (page) => {
        props.dispatch(setPageNum(page));
    }

    return (
        <Pagination
            itemCount={523}
            perPage={props.page_size}
            page={props.page}
            onSetPage={(_event, pageNumber) => updatePageNum(pageNumber)}
            widgetId="pagination-options-menu"
            onPerPageSelect={(_event, perPage) => updatePageSize(perPage)}
            isCompact
        />
    );

}