import React from 'react'
import PropTypes from 'prop-types'

import BookShelf from "../../components/shelf/BookShelf";

const ListBooksContent = (props) =>
    <div className="list-books-content">
        <div>
            {
                props.shelfs.map(shelf =>
                    <BookShelf key={shelf.id}
                               shelf={shelf}
                               onMoveTo={props.onMoveTo}
                    />
                )
            }
        </div>
    </div>

ListBooksContent.propTypes = {
    shelfs: PropTypes.array.isRequired,
    onMoveTo: PropTypes.func.isRequired
}

export default ListBooksContent