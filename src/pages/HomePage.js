import React from 'react'
import BookShelf from '../components/shelf/BookShelf'

import Mocks from '../Mocks'

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listBooks: new Mocks().mock()
        }
        this.moveBook = this.moveBook.bind(this)
    }

    moveBook(book, originShelf, destination) {
        let data = {book, originShelf, destination}
        this.setState((state) => this.updateBooksState(state, data));
    }

    updateBooksState(state, data) {
        let originShelf = state.listBooks.find(shelf => shelf.id === data.originShelf.id)
        originShelf.books = originShelf.books.filter(book => book.id !== data.book.id)

        let destinationShelf = state.listBooks.find(shelf => shelf.id === data.destination)
        destinationShelf.books = destinationShelf.books.concat(data.book)

        state.listBooks = state.listBooks.filter(shelf => shelf.id !== originShelf.id).filter(shelf => shelf.id !== destinationShelf)
        state.listBooks = state.listBooks.concat(originShelf, destinationShelf)

        return ({
            state: state
        })
    }

    render() {
        return (<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        this.state.listBooks.map(shelf =>
                            <BookShelf key={shelf.id}
                                       shelf={shelf}
                                       onMoveTo={this.moveBook}
                            />
                        )
                    }
                </div>
            </div>
            <div className="open-search">
                <a href="/search">Add a book</a>
            </div>
        </div>)
    }
}

export default HomePage