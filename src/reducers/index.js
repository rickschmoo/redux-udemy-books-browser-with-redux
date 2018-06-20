import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';

// define keys for global application state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
