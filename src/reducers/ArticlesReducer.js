import * as ConstantTypes from '../AppConstants';

const initialState = {
    loading: ConstantTypes.DEFAULT_ARTICLE_REDUCER_STATE.loading,
    loaded: ConstantTypes.DEFAULT_ARTICLE_REDUCER_STATE.loaded,
    articles: ConstantTypes.DEFAULT_ARTICLE_REDUCER_STATE.articles,
    error: ConstantTypes.DEFAULT_ARTICLE_REDUCER_STATE.error,
    count: ConstantTypes.DEFAULT_ARTICLE_REDUCER_STATE.count,
}

const ArticlesReducer = (state=initialState, action) => {
    switch(action.type) {
        case `${ConstantTypes.GET_ARTICLES}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${ConstantTypes.GET_ARTICLES}_REJECTED`:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case `${ConstantTypes.GET_ARTICLES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                loaded: true,
                articles: action.payload.data,
                count: action.payload.count
            }
        default:
            return state;
    }
}

export default ArticlesReducer;