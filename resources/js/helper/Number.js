/**
 * Random number between min and max
 * @param {Number} min
 * @param {Number} max
 * @return {Number} Number
 */
export function Random(min, max){
    return Math.round(Math.random() * (max - min)) + min;
}