import React from 'react'
import PropTypes from 'prop-types'

import BookTop from './BookTop'

const Book = props =>
    <div className="book">
        <BookTop book={props.book} onMoveTo={props.onMoveTo} />
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
    </div>

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onMoveTo: PropTypes.func.isRequired
}

export default Book