import React  from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import Books from './books.js'
import Search from './search.js'
import { Link } from 'react-router-dom';
import CreateShelf from "./createshelf";
import PropTypes from 'prop-types';

const Book = ({ book, handleBookShelf }) => {

//    change_bookShelf = (e) => {
//         this.props.onUpdate(e.target.value)
//     }
//     // constructor(props) {
//     //     super(props);
//     // }

//     state={
//         books: []
//     }
//     componentDidMount() {

//         // get all books from booksapi
//         BooksAPI.getAll().then((books) => {
//             // add books to state
//             this.setState({ books })
//             // console.log(this.state.books)
//             // console.log(books);
//         })
//     }


    // render(){

        
        // const { book } = this.props;
        // const authors = book.authors;
        // const title = book.title;
        // const { imageLinks } = this.props.book;

        // let image = imageLinks ? imageLinks.thumbnail : 'http://via.placeholder.com/128x193';

        // var book = {
        //     title: "title", authors: [], description: "", imageLinks:"http://via.placeholder.com/128x193", shelf:""};
            
        // this.props = book;
        // book = this.props;
        return(
            <li>
            <div className="book">
                <div className="book-top">
                    {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div> */}
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        // backgroundImage: `url("${imageLinks}")`
                    }}></div>
                    <div className="book-shelf-changer">
                        {/* <select onChange={e => handleBookShelf(book, e.target.value)} value={book.shelf} > */}
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            </li>
        )
    }
// }
// Book.propTypes = {
//     book: PropTypes.object.isRequired,
//     change_bookShelf: PropTypes.func.isRequired,
// }
export default Book;