const { transliterations } = require('simply-slugy');

function removeDiacritics(text) {
    if (typeof text !== 'string') return '';

    // Flatten all diacritic mappings from the transliterations object
    const diacriticMap = Object.assign({}, ...Object.values(transliterations));

    return text.split('').map(char => diacriticMap[char] || char).join('');
}

module.exports = removeDiacritics;
