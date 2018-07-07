import React from 'react';
import './App.css'

// single book

class Book extends React.Component {

    render() {
        const { title, authors, imageLinks, shelf, book, changeShelf} = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks}")` }}></div>
                        <div className="book-shelf-changer">
                        {/* change shelf when user select one of the options */}
                            <select value={shelf} onChange={e => changeShelf(book, e.target.value)} >
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

export default Book