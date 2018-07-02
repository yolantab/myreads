import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';
import Book from './book';

class Search extends Component {


    
   
    // static propTypes = {
    //     books: PropTypes.array.isRequired,
    //     changeShelf: PropTypes.func.isRequired
    // }
    // static propTypes = {
    //     onChange: PropTypes.func.isRequired,
    //     myBooks: PropTypes.array.isRequired
    // }
    state = {
        books: [],
        query: ''
    }
    componentDidMount() {

        // get all books from booksapi
        BooksAPI.getAll().then((books) => {
            // add books to state
            this.setState({ books })
            // console.log(this.state.books)
            // console.log(books);
        })
    }

    // handleChange = (event) => {
    //     var value = event.target.value
    //     this.setState(() => {
    //         return { query: value }
    //     })
    //     this.findbook(value)
    // }


    // updateShelf = (addedBook, updatedShelf) => {
    //     var books = BooksAPI;
    //     books.update(addedBook, updatedShelf).then(() => {

    //         // change shelf wnen new book is added
    //         addedBook.shelf = updatedShelf;
    //         console.log(books)
    //         //filter list of books to check if book is on the shelf
    //         var updatedBooks = this.state.books.filter(book => book.id !== addedBook.id)

    //         // add book to array of books 
    //         updatedBooks.push(addedBook);
    //         this.setState({ books: updatedBooks })
            
            

    //     })

    // };

    // changeBookShelf = (books) => {
    //     let all_Books = this.props.myBooks
    //     for (let book of books) {
    //         book.shelf = "none"
    //     }

    //     for (let book of books) {
    //         for (let b of all_Books) {
    //             if (b.id === book.id) {
    //                 book.shelf = b.shelf
    //             }
    //         }
    //     }
    //     return books
    // }

    onInputChange = query => {
        this.updateQuery(query)
        query !== '' ? (this.findbook(query)) : (console.log("test") )
                // this.clearBooks())
            }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query
            
        }))
    }

    findbook = query => {
        if (query) {
            BooksAPI.search(query, 12).then((books) => {
                if (books.length > 0) {
                    // books = books.filter((book) => (book.imageLinks))
                    // books = this.updateShelf(books)
                    console.log(books)
                    console.log(query)
                    this.setState(() => {
                        return { books: books}
                    })
                }
            })
        } else {
            this.setState({ books: [], query: '' })
        }
    }

    // add_book = (book, shelf) => {
    //     this.props.onChange(book, shelf)
    // }
    showBooks(){
        const { books, query } = this.state;

        if (query) {
            return books.error ?
                <div>Nothing found</div>
                : books.map((book, index) => {
                    return (
                        <Book
                            key={index}
                            book={book}
                            // handleBookShelf={this.handleBookShelf.bind(this)}
                        />
                    );
                });
        }
    }

    render() {
        const { query } = this.state
        const { } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            value={query}
                            placeholder="Search by title or author"
                            onChange={(event) => this.onInputChange(event.target.value)}
                            autoFocus
                        />
                         {/* value={this.state.query} onChange={this.handleChange} /> */}
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <ol className="books-grid">
                            {this.showBooks()}
                        </ol>
                    {/* <li> */}
                        {/* {this.state.query.length > 0 && this.state.books.map((book, index) => (<Book book={book} key={index} onUpdate={(shelf) => {
                            this.add_book(book, shelf)
                        }} />))} */}
                        {/* </li> */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;