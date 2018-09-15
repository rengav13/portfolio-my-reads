import React from 'react';

class SearchPage extends React.Component {
  state = {
   /** TODO: Analisar o que deve ser controlado no estado da busca. **/
  }

  render() {
   return (<div className="search-books">
            <div className="search-books-bar">
              <a href="/" className="close-search" onClick={() => {/* Direcionar para página principal! */}}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>); 
  }
}

export default SearchPage;