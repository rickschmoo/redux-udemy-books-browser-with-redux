import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// BookList gets promoted as Container through Redux
class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title}
				    className="list-group-item"
				    onClick={() => this.props.selectBook(book)}>
				    {book.title}
				</li>
			);
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}

}


function mapStateToProps(state) {
	// whatever is returned will show up as props
	// inside of BookList
	// this is the glue between react and redux
	// whenever application state changes, component rerenders
	return {
		books: state.books
	}
}


// Anything returned form this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {

	// Whenever selectBook action creator is called, the result (an action) should be passed to all of our reducers
	return bindActionCreators(
		{ selectBook: selectBook },
		dispatch
	);
}


// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
//
// export "wrapper" component around the BookList
// 1. connect(mapStateToProps) returns a function
// 2. that function is then called with BookList
//    as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

