
// selectBook is an ActionCreator, returns an action (an object with a type property)
export function selectBook(book) {
	// console.log('A book has been selected: ', book.title);
	return ({
		type: 'BOOK_SELECTED',
		payload: book
	});
}
