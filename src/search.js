import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom';
import Book from './book.js'

class Search extends React.Component {
    state = {
        books: [],
        query: ''
    }
   
    onInputChange = query => {
        this.updateQuery(query)
        query !== '' ? (this.findbook(query)) : (console.log("empty"))
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query

        }))
    }

    findbook = query => {
        if (query) {
            BooksAPI.search(query, 10).then((books) => {
                if (books.length > 0) {
                    this.setState(() => {
                        return { books: books }
                    })
                }
            })
        } else {
            this.setState({ books: [], query: '' })
        }
    }

     changeShelf(book, shelf) {
        BooksAPI.update(book, shelf)

}

    showBooks() {

        const { books, query } = this.state;

        if (query) {
            return books.error ?
                <div>Nothing found</div>
                : books.map((book, index) => {
                    const image = book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193'
                    return (
                        <Book
                            book={book}
                            key={index}
                            title={book.title}
                            imageLinks={image}
                            authors={book.authors}
                            shelf={book.shelf}
                            changeShelf={this.changeShelf.bind(this)}
                        />
                    );
                });
        }
    }

    


    render() {
        const { query } = this.state

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
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <ol className="books-grid">
                            {this.showBooks()}
                        </ol>
                    </ol>
                </div>
            </div>
        )
    }
}


export default Search