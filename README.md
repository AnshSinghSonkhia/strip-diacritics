# strip-diacritics

Remove diacritics (accents, special characters, and marks) from text, making it easier to normalize, search, and process text in multiple languages.

# Usage

```js
const { removeDiacritics, hasDiacritics, replaceDiacritics, normalizeText, getSupportedCharacters } = require('strip-diacritics');

console.log(removeDiacritics("Málaga, façade, naïve"));
// Output: "Malaga, facade, naive"

console.log(hasDiacritics("niño"));
// Output: true

console.log(replaceDiacritics("über", { 'ü': 'ue' }));
// Output: "ueber"

console.log(normalizeText("München ist schön", "de"));  
// Output: "Muenchen ist schoen"

console.log(normalizeText("¡Hola, cómo estás!", "es"));  
// Output: "Hola, como estas"

console.log(normalizeText("Crème brûlée", "fr"));  
// Output: "Creme brulee"

console.log(normalizeText("Zażółć gęślą jaźń", "pl"));  
// Output: "Zazolc gesla jazn"


console.log(getSupportedCharacters());
```

# API Reference

| Function Name            | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `removeDiacritics(text)` | Removes diacritics from a given text.                                       |
| `hasDiacritics(text)`    | Checks if a string contains diacritic characters. Returns true or false.    |
| `replaceDiacritics(text, replacementMap)` | Replaces specific diacritics with custom values (e.g., é → e, ü → ue). |
| `normalizeText(text, locale = 'en')` | Converts text into a standardized form based on language rules.              |
| `getSupportedCharacters()` | Returns a list of all characters that are modified.                      |