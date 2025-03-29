const { transliterations } = require('simply-slugy');

function hasDiacritics(text) {
    if (typeof text !== 'string') return false;

    // Flatten all supported characters from the transliterations map
    const diacriticChars = new Set(Object.keys(transliterations).flatMap(lang => Object.keys(transliterations[lang])));

    return [...text].some(char => diacriticChars.has(char));
}

module.exports = hasDiacritics;
