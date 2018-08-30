import React from 'react'

import BookOptions from './BookOptions'

class Book extends React.Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193}}>
                        <img src={this.props.book.cover} alt={this.props.book.title}/>
                    </div>
                    <div className="book-shelf-changer">
                        <BookOptions />
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>)
    }
}

export default Book