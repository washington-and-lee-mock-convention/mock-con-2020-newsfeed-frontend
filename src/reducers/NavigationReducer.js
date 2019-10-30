import * as ConstantTypes from '../AppConstants';
import history from '../history';

const incomingPath = history.location.pathname !== '' ? history.location.pathname : null;

const initialState = {
    activePage: incomingPath === null ? ConstantTypes.DEFAULT_PATH : incomingPath,
    page_num: ConstantTypes.DEFAULT_NAVIGATION_REDUCER_STATE.page_num,
    page_size: ConstantTypes.DEFAULT_NAVIGATION_REDUCER_STATE.page_size
}

const NavigationReducer = (state=initialState, action) => {
    switch(action.type) {
        case ConstantTypes.SET_ACTIVE_PAGE: 
            return {
                ...state,
                activePage: action.payload
            }
        case ConstantTypes.SET_PAGE_NUM:
            return {
                ...state,
                page_num: action.payload
            }
        case ConstantTypes.SET_PAGE_SIZE:
            return {
                ...state,
                page_size: action.payload
            }
        default:
            return state;
    }
};

export default NavigationReducer;