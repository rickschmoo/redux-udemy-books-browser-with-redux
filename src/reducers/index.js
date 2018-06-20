import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ActiveBookReducer from './reducer_active_book';

// define keys for global application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
