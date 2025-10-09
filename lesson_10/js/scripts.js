const API_URL = "https://api.code-club.dragomirik.com/form/send/";

/**
 * @see https://www.w3resource.com/javascript/form/email-validation.php
 * @param {string} email 
 * 
 * An email is a string (a subset of ASCII characters) separated 
 * into two parts by @ symbol. a "personal_info" and a domain, 
 * that is personal_info@domain. The length of the personal_info 
 * part may be up to 64 characters long and domain name may be up to 253 characters.
 * 
 * The personal_info part contains the following ASCII characters.
 * 
 * Uppercase (A-Z) and lowercase (a-z) English letters.
 * Digits (0-9).
 * Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 * Character . ( period, dot or fullstop) provided that it is not 
 * the first or last character and it will not come one after the other.
 * The domain name [for example com, org, net, in, us, info] 
 * part contains letters, digits, hyphens, and dots.
 * 
 * @returns {bool}
 */
function isEmailValid(email) {
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(format);
}

function isPhoneValid(phone) {
    const format = /^[+]?[\(\)\-\ 0-9]{8,20}$/im;
    return phone.match(format);
}

function isNameValid(name) {
    const format = /^[a-zA-Zа-яА-ЯЄєЁёЇїҐґ ]+$/;
    return format.test(name);
}
