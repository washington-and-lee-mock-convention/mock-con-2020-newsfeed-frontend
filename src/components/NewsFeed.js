import React, { Component } from 'react';
import { MAP_STATE_TO_PROPS } from '../AppConstants';
import { connect } from 'react-redux';
import { 
    Page, PageSidebar,
    PageSection, PageSectionVariants
} from '@patternfly/react-core'
import Nav from './Navigation';
import MainHeader from './MainHeader';
import { getArticles } from '../actions';
import { DEFAULT_PATH, CHECK_OBJECT_EQUIVALENCE } from '../AppConstants';
import Table from './ArticlesTable';
import Pagination from './Pagination';

class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
        this.onNavToggle = () => {
            this.setState ({
                isNavOpen: !this.state.isNavOpen
            })
        }
    }

    componentDidMount() {
        this.search()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page_size !== this.props.page_size ||
            prevProps.page !== this.props.page ||
            CHECK_OBJECT_EQUIVALENCE(prevProps.articleParams, this.props.articleParams)) {
            this.search()
        }
    }

    search = (params = null) => {
        const {page, page_size} = this.props
        var query = `${DEFAULT_PATH}/articles?page=${page}&page_size=${page_size}`
        if (params) {
            Object.entries(params).forEach(([key, search]) => {
                query += `&${search.key}=`
                console.log(search.key, search.values)
                search.values.map(value => {
                    query += `${value}%20`
                })
            })
        }
        this.props.dispatch(getArticles(query));
    }

    render () {
        return (
            <Page 
                header={
                    <MainHeader 
                        isNavOpen={this.state.isNavOpen}
                        onNavToggle={this.onNavToggle}
                        search={this.search}
                        {...this.props}
                    />
                }
                sidebar={
                    <PageSidebar nav={Nav} isNavOpen={this.state.isNavOpen} theme="dark"/>
                }
            >
                <PageSection>
                    <Pagination {...this.props}/>
                    <Table rows={
                        this.props.articleParams.articles
                    }/>
                </PageSection>
            </Page>
        );

    }

}

export default connect(MAP_STATE_TO_PROPS)(NewsFeed);