const { transliterations } = require('simply-slugy');

function getSupportedCharacters() {
    return transliterations;
}

module.exports = getSupportedCharacters;
