import React, { Component } from 'react'
import * as BookAPI from '../../BooksAPI'

import Util from '../../common/Util'
import OpenSearch from "../../components/search/OpenSearch"
import ListBooksTitle from "./ListBooksTitle"
import ListBooksContent from "./ListBooksContent"
import ShelfType from '../../common/ShelfType'
import ShelfVM from '../../common/ShelfVM'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shelfs: {}
        }
        this.moveBook = this.moveBook.bind(this)
    }

    componentDidMount() {
        BookAPI.getAll().then(books => {
            const shelfs = {}

            Object.values(ShelfType).forEach(shelfType => {
                const shelfBooks = books.filter(book => shelfType === book.shelf)
                shelfs[shelfType] = new ShelfVM(shelfType, shelfBooks)
            })

            this.setState({ shelfs })
        })
    }

    moveBook(book, source, targetId) {
        BookAPI.update(book, targetId).then(() => {
            this.setState((state) => this.updateState(state, source, state.shelfs[targetId], book));
        })
    }

    updateState(state, source, target, book) {
        Util.remove(source.books, book)

        target.books.push(book)

        state.shelfs[source.id] = source
        state.shelfs[target.id] = target

        return { state }
    }

    render() {
        return (
            <div className="list-books">
                <ListBooksTitle/>
                <ListBooksContent shelfs={Object.values(this.state.shelfs)}
                                  onMoveTo={this.moveBook}
                />
                <OpenSearch/>
            </div>
        )
    }
}

export default HomePage