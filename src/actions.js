import * as ActionTypes from './AppConstants';
import axios from 'axios';

export const getArticles = (url) => dispatch => {
    dispatch({type: `${ActionTypes.GET_ARTICLES}_PENDING`})
    axios.get(url)
        .then((response) => {
            dispatch({type: `${ActionTypes.GET_ARTICLES}_FULFILLED`, payload: response.data})
        })
        .catch((error) => {
            dispatch({type: `${ActionTypes.GET_ARTICLES}_REJECTED`, payload: error})
        })
};

export const setPageNum = (page_num) => {
    return {
        type: ActionTypes.SET_PAGE_NUM,
        payload: page_num
    }
}

export const setPageSize = (page_size) => {
    return {
        type: ActionTypes.SET_PAGE_SIZE,
        payload: page_size
    }
}