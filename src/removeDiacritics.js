const characterMap = require('./characterMap');

function removeDiacritics(text) {
    if (typeof text !== 'string') return '';

    return text.split('').map(char => characterMap[char] || char).join('');
}

module.exports = removeDiacritics;
