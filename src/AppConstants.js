export const DEFAULT_PATH='http://localhost:8080/v1'
export const SET_ACTIVE_PAGE='SET_ACTIVE_PAGE';
export const SET_PAGE_NUM='SET_PAGE_NUM';
export const SET_PAGE_SIZE='SET_PAGE_SIZE';
export const GET_ARTICLES='GET_ARTICLES';

export const DEFAULT_ARTICLE_REDUCER_STATE = {
    articles: [],
    loading: false,
    loaded: false,
    error: null,
}

export const DEFAULT_NAVIGATION_REDUCER_STATE = {
    page_num: 1,
    page_size: 10
}

export function MAP_STATE_TO_PROPS(state) {
    return {
        articleParams: {
            articles: state.articles.articles,
            error: state.articles.error,
            loading: state.articles.loading,
            loaded: state.articles.loaded
        },
        page: state.nav.page_num,
        page_size: state.nav.page_size
    }
}

export function CHECK_OBJECT_EQUIVALENCE(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

export const ARTICLE_CELLS = [
    {
        title: 'id',
    },{
        title: 'description',
    },{
        title: 'url',
    },{
        title: 'date_published',
    },{
        title: 'date_recorded',
    }
]