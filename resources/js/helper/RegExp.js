import { HasLowerChar, HasMinLength, HasNumber, HasUpperChar } from "./String";

/**
 * Test if an email is valid with regular expressions
 * @param {String} email
 * @return {Boolean} Boolean
 */
export function isValidEmail(email){
    let errors = [];

    if(!RegExpEmail.test(email)) errors.push("Please enter a valid email");

    return errors.length > 0 ? {errors, status: false} : {status: true};
}

/**
 * Test if a password is valid with regular expressions
 * @param {String} password
 * @return {Boolean} Boolean
 */
export function isValidPassword(password){
    let errors = [];

    if(!HasLowerChar(password))     errors.push("The password must contain a lower character");
    
    if(!HasUpperChar(password))     errors.push("The password must contain an upper character");
    
    if(!HasNumber(password))        errors.push("The password must contain a number");
    
    if(!HasMinLength(password, 8))  errors.push("The password must be at least 8 characters");

    if(password.includes(" "))      errors.push("The password must not contain spaces in blank");

    return errors.length > 0 ? {errors, status: false} : {status: true};
}

// Regular Expressions
export const RegExpEmail = /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;

// At least 8 characters, at least 1 upper and 1 lower characters, at least a number
// export const RegExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;