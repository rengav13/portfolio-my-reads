import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import SearchPage from './pages/search/SearchPage';
import HomePage from './pages/home/HomePage';

class BooksApp extends Component {

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={ true } component={ HomePage }/>
                        <Route path="/search" component={ SearchPage }/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default BooksApp;
