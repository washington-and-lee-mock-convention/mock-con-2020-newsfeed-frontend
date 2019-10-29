import * as ConstantTypes from '../AppConstants';
import history from '../history';

const incomingPath = history.location.pathname !== '' ? history.location.pathname : null;

const initialState = {
    activePage: incomingPath === null ? ConstantTypes.DEFAULT_PATH : incomingPath
}

const NavigationReducer = (state=initialState, action) => {
    switch(action.type) {
        case ConstantTypes.SET_ACTIVE_PAGE: 
            return {
                ...state,
                activePage: action.payload
            }
        default:
            return state;
    }
};

export default NavigationReducer;