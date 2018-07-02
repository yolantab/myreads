import React from 'react';
import './App.css'

class Shelf extends React.Component {

    render() {

        const { shelf, books } = this.props
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
 
export default Shelf