import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Shelves from './createShelves';
import * as BooksAPI from './BooksAPI';

class Books extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    }

    state = {
       
    };

    // componentDidMount() {
    //     this.bookList();
    // }
    handleBookShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => this.getBooks());
    }
    render() {
        const books = this.props.books;

      return (
        <div>
        <Shelves/>
              {/* <Shelves books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" onChangeShelf={this.props.onChange} />

              <Shelves books={books.filter((book) => (book.shelf === "read"))} title="Read" onChangeShelf={this.props.onChange} />
              <Shelves books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" onChangeShelf={this.props.onChange} /> */}

        </div>
      )
    }

}

export default Books;