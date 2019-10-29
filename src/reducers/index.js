import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import ArticlesReducer from './ArticlesReducer';

export default combineReducers({
    nav: NavigationReducer,
    articles: ArticlesReducer
});