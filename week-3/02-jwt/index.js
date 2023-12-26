const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = 'secret';

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    // Your code here
    const usernameSafe = emailSchema.safeParse(username);
    const passwordSafe = passwordSchema.safeParse(password);
    console.log(usernameSafe);
    if(!(usernameSafe.success==true && passwordSafe.success==true)){
        return null
    }

    let token = null;
    try {
        token = jwt.sign({username: usernameSafe.data, password: passwordSafe.data}, jwtPassword);
    } catch(e){
        console.log(e);
    }
    return token;
}

// const token = signJwt('kirat@gmail.com', '123456' );
// console.log(token);
// const decoded = jwt.decode(token);
// console.log(decoded);
/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    let isTokenValid = false;
    let decodedUser;
    try {
        decodedUser = jwt.verify(token, jwtPassword);
        if(decodedUser){
            isTokenValid = true;
        } else {
            isTokenValid = false;
        }
    } catch(e){
        console.log(e);
        isTokenValid = false;
    }
    return isTokenValid;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    let isTokenValid = false;
    let decodedUser;
    try {
        decodedUser = jwt.decode(token);
        if(decodedUser){
            isTokenValid = true;
        } else {
            isTokenValid = false;
        }
    } catch(e){
        console.log(e);
        isTokenValid= false;
    }
    return isTokenValid;
}

module.exports = {
  signJwt, 
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
