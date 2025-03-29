const characterMap = require('./characterMap');

function hasDiacritics(text) {
    if (typeof text !== 'string') return false;
    
    return [...text].some(char => characterMap[char] !== undefined);
}

module.exports = hasDiacritics;
