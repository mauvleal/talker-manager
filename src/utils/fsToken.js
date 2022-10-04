// https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details

function generateToken() {
    const token = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
    return token;
}

module.exports = generateToken;