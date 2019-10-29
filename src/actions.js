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