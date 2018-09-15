import React from 'react';
import PropTypes from 'prop-types';

import ShelfType from '../../common/shelftype';

const BookOptions = props =>
    <select defaultValue="move" onChange={ (event) => props.onMoveTo(event.target.value) }>
        <option value="move" disabled>Move to...</option>
        <option value={ ShelfType.CURRENTLY_READING }>Currently Reading</option>
        <option value={ ShelfType.WANT_TO_READ }>Want to Read</option>
        <option value={ ShelfType.READ }>Read</option>
    </select>;

BookOptions.propTypes = {
    onMoveTo: PropTypes.func.isRequired
};

export default BookOptions;