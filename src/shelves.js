import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link } from 'react-router-dom';
import Book from './book.js';
import Shelf from './shelf';

class Shelves extends React.Component {


    state = {
        books: [],
    }

    componentDidMount() {

       this.getbooks();
        }

  // get all books that are one shelves
    getbooks(){
        BooksAPI.getAll().then((books) => {
            // add books to state
            this.setState({ books })
        })
    }


   changeShelf(book, shelf){
       // uptade booksapi when shelf is changed
        BooksAPI.update(book, shelf).then(() => this.getbooks());
    }


    render() {
        const allbooks = this.state.books
        const books = allbooks.map(book => 
        <Book book={book} 
            key={book.id} 
            title={book.title}
            imageLinks={book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193'} 
            shelf={book.shelf}
            changeShelf={this.changeShelf.bind(this)}
             />)

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                {/* filter books and place them on the shelves if shelf's name fits */}
                    <Shelf shelf="Currently Reading" books={books.filter(book => (book.props.shelf === "currentlyReading"))} />
                    <Shelf shelf="Want to Read" books={books.filter(book => (book.props.shelf === "wantToRead"))} />
                    <Shelf shelf="Read" books={books.filter(book => (book.props.shelf === "read"))} />

                </div>
                <div className="open-search">
                    <Link to= './search'>Add a book</Link>
                </div>
            </div>
        )
    }

}

export default Shelves