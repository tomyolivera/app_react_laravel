/**
 * Convert a date into another format
 * @param {Date} date Date
 * @param {String} lang String [*es - en*]
 * @return {String | Null} String | Null
 */
export function FormatDate({date, lang = "es"}){
    const d = new Date(date);
    let day = d.getDate() + 1;
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    const format = lang.toLowerCase();

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    return (
        format === "es"
            ?  day + '-' + month + '-' + year
            :  format === "en"
                ? year + '-' + month + '-' + day
                : null
    );
}

/**
 * Actual Date
 * @return {String} String
 */
export function ActualDate(){
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    return year + '-' + month + '-' + day;
}

/**
 * Actual Time
 * @return {String} String
 */
export function ActualTime(){
    const d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();

    if(seconds < 10) seconds = '0' + seconds;
    if(minutes < 10) minutes = '0' + minutes;
    if(hours < 10) hours = '0' + hours;

    return hours + ':' + minutes + ':' + seconds;
}

/**
 * Actual Date & Time
 * @return {String} String
 */
export function ActualDateTime(){
    return ActualDate() + 'T' + ActualTime();
}