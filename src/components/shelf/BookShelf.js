import React from 'react';
import PropTypes from 'prop-types';

import BookGrid from '../book/BooksGrid';

const BookShelf = props =>
    <div className="bookshelf">
        <h2 className="bookshelf-title">{ props.shelf.title }</h2>
        <div className="bookshelf-books">
            <BookGrid books={ props.shelf.books }
                      onMoveTo={ (book, target) => props.onMoveTo(book, props.shelf, target) }
            />
        </div>
    </div>;

BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    onMoveTo: PropTypes.func.isRequired
};

export default BookShelf;