import React, { Component } from 'react';
import * as BookAPI from '../../BooksAPI';

import Util from '../../common/Util';
import OpenSearch from '../../components/search/OpenSearch';
import HomePageBar from './HomePageBar';
import HomePageContent from './HomePageContent';
import ShelfType from '../../common/shelftype';
import ShelfVM from '../../common/ShelfVM';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { shelfs: {} };
        this.moveBook = this.moveBook.bind(this);
    }

    /**
     * @description Load all books stored in the server and classify each one into their respective shelf.
     */
    componentDidMount() {
        BookAPI.getAll().then(books => {
            const shelfs = {};

            Object.values(ShelfType).forEach(shelfType => {
                const shelfBooks = books.filter(book => shelfType === book.shelf);
                shelfs[ shelfType ] = new ShelfVM(shelfType, shelfBooks);
            });

            this.setState({ shelfs });
        });
    }

    /**
     * @description Persist the book shelf change on the server and change it on the app.
     * @param book
     * @param source
     * @param targetId
     */
    moveBook(book, source, targetId) {
        BookAPI.update(book, targetId).then(() => {
            this.setState((state) => this.updateState(state, source, state.shelfs[ targetId ], book));
        });
    }

    /**
     * @description Move a book from a shelf to another.
     * @param state
     * @param source
     * @param target
     * @param book
     * @returns {{state: *}}
     */
    updateState(state, source, target, book) {
        Util.remove(source.books, book);

        target.books.push(book);

        state.shelfs[ source.id ] = source;
        state.shelfs[ target.id ] = target;

        return { state };
    }

    render() {
        return (
            <div className="list-books">
                <HomePageBar/>
                <HomePageContent shelfs={ Object.values(this.state.shelfs) }
                                 onMoveTo={ this.moveBook }
                />
                <OpenSearch/>
            </div>
        );
    }
}

export default HomePage;