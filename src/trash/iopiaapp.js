import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import Books from './books.js'
import Search from './search.js'
import Shelves from './createShelves.js'

import { Link } from 'react-router-dom';

import Book from './book'



class BooksApp extends React.Component {
  // state = {
  //   books: [],
  
  // }

  // componentDidMount() {

  //   // get all books from booksapi
  //   BooksAPI.getAll().then((books) => {
  //     // add books to state
  //     this.setState({ books })
  //     console.log(this.state.books)
  //     console.log(books);
  //   })
  // }

  // updateShelf = (addBook, updatedShelf) => {
  //   var books = BooksAPI;
  //   books.update(addBook, updatedShelf).then(() => {

  //     // change shelf wnen new book is added
  //     addBook.shelf = updatedShelf;

  //     //filter list of books to check if book is on the shelf
  //     var updatedBooks = this.state.books.filter(book => book.id !== addBook.id)

  //     // add book to array of books 
  //     updatedBooks.push(addBook);
  //     this.setState({ books: updatedBooks })
  //   })



  // };



  render() {
    return (
      <div className="app">
      <Search/>
      <Shelves />
      
        {/* <Route path="/books" exact component={Books} />
        <Route path="/search" component={Search} /> */}
       
      </div>
    )
  }

}

export default BooksApp
