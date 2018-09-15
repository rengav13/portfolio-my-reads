# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. It's about a library app, that enable the user to view the books that he wants to read, that are currently reading, and the ones that was read. The application also provide a search page that permit user seek for books. 

## App Installing and Launching

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

The back-end server is provided by Udacity, so it's not needed to lauch the server. 

## App Architecture

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # App Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── common # Common js files. There's files used throughout the app.
    |   ├── ...
    ├── components # In this app, components are the building blocks of a page. The components are divides by its semantics.
    |   ├── book # Contains all components that are used to build a book (i.e. Cover, Options, Top and so on)
    |       ├── ...
    |   ├── search # Contains all components that are related with the search
    |       ├── ...
    |   ├── shelf # Contains all components that are related with the shelf
    |       ├── ...
    ├── pages # In this app, a page is builded by placing components.
    |   ├── home # This is the main page of the app.
    |       ├── ...
    |   ├── search # This is the page used to seek books.
    |       ├── ...
    ├── test # Contains all application's tests.
    |   ├── ...
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg   
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
