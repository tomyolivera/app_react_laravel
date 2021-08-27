/**
 * String length is bigger than min
 * @param {String} str
 * @param {Number} min
 * @return {Boolean} Boolean
 */
export function HasMinLength(str, min) {
    return str.length >= min
}

/**
 * String length is less than max length
 * @param {String} str
 * @param {Number} max
 * @return {Boolean} Boolean
 */
export function HasMaxLength(str, max) {
    return str.length <= max
}

/**
 * Test if string contains a lower character
 * @param {String} str
 * @return {Boolean} Boolean
 */
export function HasLowerChar(str){
    return /(?=.*[a-z])/.test(str);
}

/**
 * Test if string contains an upper character
 * @param {String} str
 * @return {Boolean} Boolean
 */
export function HasUpperChar(str){
    return /(?=.*[A-Z])/.test(str);
}

/**
 * Test if string contains a number
 * @param {String} str
 * @return {Boolean} Boolean
 */
export function HasNumber(str){
    return /(?=.*\d)/.test(str);
}