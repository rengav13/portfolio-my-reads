/**
 * @description It must hold utilitary methods.
 *
 * It means methods that perform common operations that are not restricted by any object concept.
 */
class Util {

    /**
     * @description It should remove an element from an array.
     * @param array
     * @param element
     */
    static remove(array, element) {
        const index = array.indexOf(element);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}

export default Util;