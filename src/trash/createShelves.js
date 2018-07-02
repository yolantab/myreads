import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import Books from './books.js'
import Search from './search.js'
import { Link } from 'react-router-dom';
import Book from './book';
import PropTypes from 'prop-types';


class Shelves extends Component {


    state = {
        showSearchPage: false,
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    };
    // static propTypes = {
    //     books: PropTypes.array.isRequired,
    //     title: PropTypes.string.isRequired,
    //     onChangeShelf: PropTypes.func.isRequired
    // }


    // componentDidMount() {

    //     // get all books from booksapi
    //     BooksAPI.getAll().then((books) => {
    //         // add books to state
    //         this.setState({ books })
    //         console.log(this.state.books)
    //         console.log(books);
    //     })
    // }


    // updateShelf = (addBook, updatedShelf) => {
    //     var books = BooksAPI;
    //     books.update(addBook, updatedShelf).then(() => {

    //         // change shelf wnen new book is added
    //         addBook.shelf = updatedShelf;

    //         //filter list of books to check if book is on the shelf
    //         var updatedBooks = this.state.books.filter(book => book.id !== addBook.id)

    //         // add book to array of books 
    //         updatedBooks.push(addBook);
    //         this.setState({ books: updatedBooks })

    //     })



    // };

    render() {


        const { books } = this.state

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                <Book />
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to = './search'>Add a book</Link>
                </div>
            </div>
        )
    }
}



export default Shelves;