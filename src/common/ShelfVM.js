import ShelfType from './shelftype';

/**
 * @description Represents a shelf view model.
 *
 * The aim of this class is to simplify the construction of shelf objects.
 */
class ShelfVM {

    constructor(shelfType, books) {
        this.id = shelfType;
        this.title = this.chooseTitle(shelfType);
        this.books = books;
    }

    /**
     * @description Based on the shelf type it choose the properly title.
     * @param shelfType
     * @returns {string}
     */
    chooseTitle(shelfType) {
        switch (shelfType) {
            case ShelfType.CURRENTLY_READING:
                return 'Currently Reading';
            case ShelfType.WANT_TO_READ:
                return 'Want to Read';
            case ShelfType.READ:
                return 'Read';
            default:
                throw new Error('Unsupported shelf type');
        }
    }
}

export default ShelfVM;