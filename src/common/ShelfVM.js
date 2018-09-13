
import ShelfType from './ShelfType'

class ShelfVM {

    constructor(shelfType, books) {
        this.id = shelfType
        this.title = this.chooseTitle(shelfType)
        this.books = books
    }

    chooseTitle(shelfType) {
        switch (shelfType) {
            case ShelfType.CURRENTLY_READING:
                return 'Currently Reading'
            case ShelfType.WANT_TO_READ:
                return 'Want to Read'
            case ShelfType.READ:
                return 'Read'
            default:
                throw new Error('Unsupported shelf type')
        }
    }
}

export default ShelfVM