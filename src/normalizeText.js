const removeDiacritics = require('./removeDiacritics');
const { transliterations } = require('simply-slugy'); // Import from simply-slugy

function normalizeText(text, locale = 'en') {
    if (typeof text !== 'string') return '';

    let output = text.toLowerCase();

    if (transliterations[locale]) {
        for (const [key, value] of Object.entries(transliterations[locale])) {
            output = output.split(key).join(value);
        }
    }

    return removeDiacritics(output);
}

module.exports = normalizeText;
