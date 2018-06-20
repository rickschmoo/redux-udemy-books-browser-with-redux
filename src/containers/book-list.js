import React, { Component } from 'react';
import { connect } from 'react-redux';

// BookList gets promoted as Container through Redux
class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title}
				    className="list-group-item">
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

// export "wrapper" component around the BookList
// 1. connect(mapStateToProps) returns a function
// 2. that function is then called with BookList
//    as a parameter
export default connect(mapStateToProps)(BookList);

