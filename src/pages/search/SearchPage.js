import React, {Component} from 'react';

import * as BookAPI from '../../BooksAPI'

import BooksGrid from '../../components/book/BooksGrid'
import SearchBar from "../../components/search/SearchBar";

class SearchPage extends Component {

    constructor(props) {
        super(props)
        this.state = { books: [] }
        this.updateBook = this.updateBook.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    updateBook(book, target) {
        BookAPI.update(book, target)
    }

    handleChange(query) {
        BookAPI.search(query, 20).then(books => {
            if (books) {
                this.setState(books['error'] ? { books: [] } : {books})
            } else {
                this.setState({ books: [] })
            }
        })
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar onChangeQuery={this.handleChange}/>
                <div className="search-books-results">
                    {
                        this.state.books.length > 0 ?
                            <BooksGrid books={this.state.books} onMoveTo={this.updateBook}/> :
                            <div className="search-no-results">
                                No books found, please try another query.
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;