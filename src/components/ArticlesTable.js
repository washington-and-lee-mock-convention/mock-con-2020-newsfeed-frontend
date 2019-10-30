import React from 'react';
import {
    Table, TableVariant, TableHeader, TableBody
} from '@patternfly/react-table'
import { ARTICLE_CELLS } from '../AppConstants';
import Linkify from 'react-linkify';

const generateRows = (props) => {
    var rows = []
    if (props.rows) {
        Object.values(props.rows).forEach(article => {
            var row = []
            Object.entries(ARTICLE_CELLS).forEach(([cellKey, cellValue]) => {
                Object.entries(article).forEach(([key, value]) => {
                    if (cellValue.title === key) {
                        if (cellValue.title === 'url'){
                            row.push({title: <Linkify>{value}</Linkify>})
                        } else {
                            row.push({ title: value })
                        }
                    }
                })
            })
            rows.push(row)
        })
    }
    return rows
}

export default props => {

    const rows = generateRows(props)
    
    return (
        <Table
            cells={ARTICLE_CELLS}
            rows={rows}
            variant={TableVariant.compact}
        >
            <TableHeader/>
            <TableBody/>
        </Table>
    )

}