import React from 'react'
import PropTypes from 'prop-types'

import BookShelfGrid from './BookShelfGrid'

const BookShelf = props =>
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.title}</h2>
        <div className="bookshelf-books">
            <BookShelfGrid shelf={props.shelf}
                           onMoveTo={(book, target) => props.onMoveTo(book, props.shelf, target)}
            />
        </div>
    </div>

BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    onMoveTo: PropTypes.func.isRequired
}

export default BookShelf