function replaceDiacritics(text, replacementMap = {}) {
    if (typeof text !== 'string') return '';

    return text.split('').map(char => replacementMap[char] || char).join('');
}

module.exports = replaceDiacritics;
