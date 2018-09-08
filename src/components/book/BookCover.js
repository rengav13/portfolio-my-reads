import React from 'react'
import PropTyes from 'prop-types'

const BookCover = props =>
    <div className="book-cover" style={{width: 128, height: 193}}>
        <img src={props.book.cover} alt={props.book.title}/>
    </div>

BookCover.propTypes = {
    book: PropTyes.object.isRequired
}

export default BookCover