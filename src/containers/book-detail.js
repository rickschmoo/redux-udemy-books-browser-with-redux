import React, { Component } from 'react';
import { connect } from 'react-redux';

// BookList gets promoted as Container through Redux
class BookDetail extends Component {

	render() {
		// console.log("Rendering book detail!");
		if (!this.props.book) {
			return (
				<div>
					Select a book to get going!
				</div>
			);
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Number of pages: {this.props.book.pages}</div>
			</div>
		);
	}

}


function mapStateToProps(state) {
	// whatever is returned will show up as props
	// inside of BookList
	// this is the glue between react and redux
	// whenever application state changes, component rerenders
	return {
		book: state.activeBook
	}
}


// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
//
// export "wrapper" component around the BookList
// 1. connect(mapStateToProps) returns a function
// 2. that function is then called with BookList
//    as a parameter
export default connect(mapStateToProps)(BookDetail);

