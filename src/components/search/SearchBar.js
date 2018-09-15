import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import SearchInput from './SearchInput'

const SearchBar = props =>
    <div className="search-books-bar">
        <Link to="/"
              className="close-search">
            Close
        </Link>
        <SearchInput onChange={ props.onChangeQuery }/>
    </div>

SearchBar.propTypes = {
    onChangeQuery: PropTypes.func.isRequired
}

export default SearchBar