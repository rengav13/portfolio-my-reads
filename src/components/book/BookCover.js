import React from 'react'
import PropTyes from 'prop-types'

const BookCover = props =>
    <div className="book-cover" style={{height: 193, overflowY: 'hidden'}}>
        {
            props.book.imageLinks ?
                <img src={props.book.imageLinks.thumbnail}
                     alt={props.book.title}
                     style={{width: '100%', height: '100%'}}
                /> : false
        }
    </div>

BookCover.propTypes = {
    book: PropTyes.object.isRequired
}

export default BookCover