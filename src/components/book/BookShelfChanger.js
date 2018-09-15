import React from 'react';
import PropTypes from 'prop-types';

import BookOptions from './BookOptions';

const BookShelfChanger = props =>
    <div className="book-shelf-changer">
        <BookOptions onMoveTo={ props.onMoveTo }/>
    </div>;

BookShelfChanger.propType = {
    onMoveTo: PropTypes.func.isRequired
};

export default BookShelfChanger;