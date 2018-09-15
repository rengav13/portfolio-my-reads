import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const SearchInput = props =>
    <div className="search-books-input-wrapper">
        <DebounceInput type="text"
                       debounceTimeout={ 300 }
                       placeholder="Search by title or author"
                       onChange={ (event) => props.onChange(event.target.value) }
        />
    </div>;

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default SearchInput;