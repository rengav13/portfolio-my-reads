import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchPage from './view/search/SearchPage'
import ListBooks from './view/main/ListBooks'

class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={ListBooks}/>
                        <Route path="/search" component={SearchPage}/>
                    </Switch>
                </BrowserRouter>
            </div>)
    }
}

export default BooksApp
