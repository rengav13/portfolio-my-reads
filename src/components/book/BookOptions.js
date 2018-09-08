import React from 'react'
import PropTypes from 'prop-types'

const BookOptions = props =>
    <select onChange={(event) => props.onMoveTo(event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
    </select>

BookOptions.propTypes = {
    onMoveTo: PropTypes.func.isRequired
}

export default BookOptions