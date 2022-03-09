import { createStore, combineReducers } from 'redux';
import newsReducer from './reducers/news';


const rootReducer = combineReducers({
  news: newsReducer
});

const store = createStore(rootReducer);

export default store