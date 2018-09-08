import React from 'react'
import PropTypes from 'prop-types'

import Book from '../book/Book'

const BookShelfGrid = props =>
    <ol className="books-grid">
        {
            props.shelf.books.map(book =>
                <li key={book.id}>
                    <Book book={book}
                          onMoveTo={(target) => props.onMoveTo(book, target)}
                    />
                </li>)
        }
    </ol>

BookShelfGrid.propTypes = {
    shelf: PropTypes.object.isRequired,
    onMoveTo: PropTypes.func.isRequired
}

export default BookShelfGrid