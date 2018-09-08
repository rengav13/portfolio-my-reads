import React from 'react'
import PropTypes from 'prop-types'

import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

const BookTop = props =>
    <div className="book-top">
        <BookCover book={props.book}/>
        <BookShelfChanger onMoveTo={props.onMoveTo}/>
    </div>

BookTop.propTypes = {
    book: PropTypes.object.isRequired,
    onMoveTo: PropTypes.func.isRequired
}

export default BookTop