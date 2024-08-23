// fuzz_users.js
const users = require("./lib/users");

/**
 * Fuzzing function for `auth` and `active`.
 * @param {Buffer} data
 */
module.exports.fuzz = function (data) {
    try {
        // Only proceed if the data length is sufficient
        if (data.length < 4) {
            return;
        }

        // Extract user credentials from the input data
        const username = data.slice(0, Math.min(data.length / 2, 16)).toString('utf-8').trim();
        const password = data.slice(Math.min(data.length / 2, 16), Math.min(data.length, 32)).toString('utf-8').trim();

        // Fuzz `auth` function
        users.auth(username, password).catch(() => { });

        // Fuzz `active` function with the username
        users.active(username).catch(() => { });
    } catch (e) {
        // Handle any unexpected exceptions
        console.error("Error in fuzzing test:", e);
    }
};
