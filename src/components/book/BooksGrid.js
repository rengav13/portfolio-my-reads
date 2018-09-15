import React from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

const BooksGrid = props =>
    <ol className="books-grid">
        {
            props.books.map(book =>
                <li key={book.id}>
                    <Book book={book}
                          onMoveTo={(target) => props.onMoveTo(book, target)}
                    />
                </li>
            )
        }
    </ol>

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onMoveTo: PropTypes.func.isRequired
}

export default BooksGrid