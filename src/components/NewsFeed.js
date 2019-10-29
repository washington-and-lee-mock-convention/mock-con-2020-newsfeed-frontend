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
import { DEFAULT_PATH } from '../AppConstants';
import Table from './ArticlesTable';

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
        this.props.dispatch(getArticles(`${DEFAULT_PATH}/articles`));
    }

    render () {
        console.log(this.props)
        return (
            <Page 
                header={
                    <MainHeader isNavOpen={this.state.isNavOpen} onNavToggle={this.onNavToggle} {...this.props}/>
                }
                sidebar={
                    <PageSidebar nav={Nav} isNavOpen={this.state.isNavOpen} theme="dark"/>
                }
            >
                <PageSection>
                    <Table rows={
                        this.props.articleParams.articles
                    }/>
                </PageSection>
            </Page>
        );

    }

}

export default connect(MAP_STATE_TO_PROPS)(NewsFeed);