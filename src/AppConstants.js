export const DEFAULT_PATH='http://localhost:8080/v1'
export const SET_ACTIVE_PAGE='SET_ACTIVE_PAGE';
export const GET_ARTICLES='GET_ARTICLES'

export const DEFAULT_ARTICLE_REDUCER_STATE = {
    articles: [],
    loading: false,
    loaded: false,
    error: null,
}

export function MAP_STATE_TO_PROPS(state) {
    return {
        articleParams: {
            articles: state.articles.articles,
            error: state.articles.error,
            loading: state.articles.loading,
            loaded: state.articles.loaded
        }
    }
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