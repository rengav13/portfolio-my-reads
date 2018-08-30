import React from 'react'
import BookShelf from './BookShelf'

class BookVM {
    constructor(id, cover, title, authors) {
        this.id = id
        this.cover = cover
        this.title = title
        this.authors = authors
    }
}

class BookShelfVM {
    constructor(id, title, books) {
        this.id = id
        this.title = title
        this.books = books
    }
}

class ListBooks extends React.Component {

    constructor(props) {
        super()
        console.log(this.mock())
    }

    mockCovers(index) {
        const covers = [
            "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
            "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
            "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
            "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
            "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
            "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
        ]
        return covers[index]
    }

    mockBooks(index) {
        const mocks = [
            [new BookVM(0, this.mockCovers(0), "To Kill a Mockingbird", "Harper Lee"), new BookVM(1, this.mockCovers(1), "Ender's Game", "Orson Scott Card")],
            [new BookVM(2, this.mockCovers(2), "1776", "David McCullough"), new BookVM(3, this.mockCovers(3), "Harry Potter and the Sorcerer's Stone", "J.K. Rowling")],
            [new BookVM(4, this.mockCovers(4), "The Hobbit", "J.R.R. Tolkien"), new BookVM(5, this.mockCovers(5), "Oh, the Places You'll Go!", "Seuss")]
        ]
        return mocks[index]
    }

    mock() {
        return [
            new BookShelfVM(0, "Currently Reading", this.mockBooks(0)),
            new BookShelfVM(1, "Want to Read", this.mockBooks(1)),
            new BookShelfVM(2, "Read", this.mockBooks(2))
        ];
    }

    render() {
        return (<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        this.mock().map(shelf => <BookShelf key={shelf.id} shelf={shelf}/>)
                    }
                </div>
            </div>
            <div className="open-search">
                <a href="/search">Add a book</a>
            </div>
        </div>)
    }
}

export default ListBooks