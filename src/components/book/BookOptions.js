import React from 'react'
import PropTypes from 'prop-types'

import ShelfType from '../../common/ShelfType'

const BookOptions = props =>
    <select onChange={(event) => props.onMoveTo(event.target.value)}>
        <option value={ShelfType.CURRENTLY_READING}>Currently Reading</option>
        <option value={ShelfType.WANT_TO_READ}>Want to Read</option>
        <option value={ShelfType.READ}>Read</option>
    </select>

BookOptions.propTypes = {
    onMoveTo: PropTypes.func.isRequired
}

export default BookOptions