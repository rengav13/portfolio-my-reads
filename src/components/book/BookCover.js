import React from 'react';
import PropTyes from 'prop-types';

const BookCover = props =>
    <div className="book-cover">
        {
            props.book.imageLinks ?
                <img src={ props.book.imageLinks.thumbnail }
                     alt={ props.book.title }
                /> : false
        }
    </div>;

BookCover.propTypes = {
    book: PropTyes.object.isRequired
};

export default BookCover;