export const titleCase = (title, minorWords) => {
    if (!title) return '';
    const titleWords = title.toLowerCase().split(' ');
    const minorWordsLowercase = minorWords ? minorWords.toLowerCase().split(' ') : [];

    return titleWords.map((word, index) => minorWordsLowercase.indexOf(word) === -1 || index === 0 ?
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() :
        word).join(' ');
};

