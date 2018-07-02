import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';


class Book extends React.Component{
 
  render(){
    const { title, authors, imageLinks, shelf, book} = this.props;

    return(
       <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks}")` }}></div>
            <div className="book-shelf-changer">
              {/* <select onChange={e => handleBookShelf(book, e.target.value)} value={book.shelf} > */}
                {/* <select value={shelf} onChange = {console.log("test")}> */}
        
              <select value={shelf} onChange={e => {book.shelf = e.target.value; console.log(book)} } >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>

    )
  }
}
class Shelf extends React.Component{

render() {
    
    const {shelf, books} = this.props
   

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books}
          </ol>
        </div>
      </div>
    )
  }
}

class Shelves extends React.Component{



  state = {
    books: [],
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
  //         console.log(this.state.read);

  //     })



  // };
//  add_book = (book, shelf) => {
//       this.props.onChange(book, shelf)
//   }

  render() {
    const {book} = this.props;
    const allbooks = this.state.books
    // const image = book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193'
    const books = allbooks.map(book =>  <Book book={book} key={book.id} title={book.title}
     imageLinks={ book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193'}  shelf = {book.shelf}/>)
    // const newArray = books.filter(book => (book.props.shelf === "read"));
    // const newArray = books.map(book => console.log(book.props.shelf));
    // console.log(newArray);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf shelf="Currently Reading" books={books.filter(book => (book.props.shelf === "currentlyReading"))} />
          <Shelf shelf="Want to Read" books={books.filter(book => (book.props.shelf === "wantToRead"))} />
          <Shelf shelf="Read" books={books.filter(book => (book.props.shelf === "read"))} />
          
        </div>
        <div className="open-search">
          <Link to='./search'>Add a book</Link>
        </div>
      </div>
    )
  }

}

class Search extends React.Component{
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
      console.log(books);
    })
  }

  updateShelf = (addBook, updatedShelf) => {

      BooksAPI.update(addBook, updatedShelf).then(() => {

          // change shelf wnen new book is added
          addBook.shelf = updatedShelf;

          //filter list of books to check if book is on the shelf
          var updatedBooks = this.state.books.filter(book => book.id !== addBook.id)

          // add book to array of books 
          updatedBooks.push(addBook);
          this.setState({ books: updatedBooks })

      })
}



  onInputChange = query => {
    this.updateQuery(query)
    query !== '' ? (this.findbook(query)) : (console.log("empty"))
    // this.clearBooks())
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
          // books = this.updateShelf(books)
          console.log(books)
          console.log(query)
          this.setState(() => {
            return { books: books }
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

  // handleBookShelf(book, shelf) {
  //   BooksAPI.update(book, shelf)
  //     .then(() => book.shelf !== 'none' ? alert(`${book.title} has been added to your shelf!`) : null)
  //     .catch(() => alert('Something went wrong! Please try again!'));
  // }

  showBooks() {

    const { books, query } = this.state;

    if (query) {
      return books.error ?
        <div>Nothing found</div>
        : books.map((book, index) => {
          const image = book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193'
          return (
            <Book
              book ={book}
              key={index}
              title={book.title}
              imageLinks = {image}
              authors ={book.authors}
              shelf ={book.shelf}
              handleBookShelf={this.updateShelf}
            />
          );
        });
    }
  }

  render() {
    const { query } = this.state
   const {book} =this.props

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
class BooksApp extends React.Component {
  // state = {
  //   books: [],
  //   query: ''
  // }
  // componentDidMount() {

  //   // get all books from booksapi
  //   BooksAPI.getAll().then((books) => {
  //     // add books to state
  //     this.setState({ books })
  //     // console.log(this.state.books)
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
  //     console.log(this.state.read);

  //   })
  // }
  render() {

    // const books= this.state.books;
    // const title  ="tytuł"
    return (
      <div className="app">
      
        
         
        <Route  component={Shelves} />
        <Route component={Search} />
       
      </div>
    )
  }

}

export default BooksApp
